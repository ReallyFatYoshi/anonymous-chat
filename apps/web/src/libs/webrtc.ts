export interface SignalingInterface {
  send: (data: any) => void;
  onMessage: (handler: (msg: any) => void) => void;
}

export default class WebRTC {
  private localVideo: HTMLVideoElement;
  private remoteVideo: HTMLVideoElement;
  private signaling: SignalingInterface;
  private peerConnection: RTCPeerConnection | null = null;
  private localStream: MediaStream | null = null;

  private servers: RTCConfiguration = {
    iceServers: [
      { urls: "stun:stun.l.google.com:19302" },
      { urls: "stun:stun.l.google.com:5349" },
      { urls: "stun:stun1.l.google.com:3478" },
      { urls: "stun:stun1.l.google.com:5349" },
      { urls: "stun:stun2.l.google.com:19302" },
      { urls: "stun:stun2.l.google.com:5349" },
      { urls: "stun:stun3.l.google.com:3478" },
      { urls: "stun:stun3.l.google.com:5349" },
      { urls: "stun:stun4.l.google.com:19302" },
      { urls: "stun:stun4.l.google.com:5349" },
    ],
  };

  /**
   * Creates a new WebRTC instance.
   * @param localVideo - HTML video element to display local media stream.
   * @param remoteVideo - HTML video element to display remote media stream.
   * @param signaling - Signaling interface for exchanging SDP and ICE candidates.
   */
  constructor(
    localVideo: HTMLVideoElement,
    remoteVideo: HTMLVideoElement,
    signaling: SignalingInterface
  ) {
    this.localVideo = localVideo;
    this.remoteVideo = remoteVideo;
    this.signaling = signaling;

    this._setupSignaling();
  }

  /**
   * Starts the user's local camera and microphone.
   */
  async startLocalStream(): Promise<void> {
    this.localStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    this.localVideo.srcObject = this.localStream;
  }

  /**
   * Creates and configures a new RTCPeerConnection.
   */
  async createPeerConnection(): Promise<void> {
    this.peerConnection = new RTCPeerConnection(this.servers);

    this.peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        this.signaling.send({
          type: "ice-candidate",
          candidate: event.candidate,
        });
      }
    };

    this.peerConnection.ontrack = (event) => {
      this.remoteVideo.srcObject = event.streams[0];
    };

    this.localStream?.getTracks().forEach((track) => {
      this.peerConnection?.addTrack(track, this.localStream as MediaStream);
    });
  }

  /**
   * Initiates a call by creating an offer.
   */
  async call(): Promise<void> {
    await this.createPeerConnection();

    const offer = await this.peerConnection!.createOffer();
    await this.peerConnection!.setLocalDescription(offer);

    this.signaling.send({ type: "offer", offer });
  }

  /**
   * Handles an incoming offer by creating an answer.
   * @param offer - The SDP offer received from the remote peer.
   */
  async answer(offer: RTCSessionDescriptionInit): Promise<void> {
    await this.createPeerConnection();
    await this.peerConnection!.setRemoteDescription(
      new RTCSessionDescription(offer)
    );

    const answer = await this.peerConnection!.createAnswer();
    await this.peerConnection!.setLocalDescription(answer);

    this.signaling.send({ type: "answer", answer });
  }

  /**
   * Handles an incoming answer to a previously sent offer.
   * @param answer - The SDP answer received from the remote peer.
   */
  async handleAnswer(answer: RTCSessionDescriptionInit): Promise<void> {
    await this.peerConnection!.setRemoteDescription(
      new RTCSessionDescription(answer)
    );
  }

  /**
   * Adds an ICE candidate received from the remote peer.
   * @param candidate - The ICE candidate to be added.
   */
  async addIceCandidate(candidate: RTCIceCandidateInit): Promise<void> {
    if (candidate) {
      await this.peerConnection!.addIceCandidate(
        new RTCIceCandidate(candidate)
      );
    }
  }

  /**
   * Sets up signaling event listeners.
   */
  private _setupSignaling(): void {
    this.signaling.onMessage(async (msg: any) => {
      if (msg.type === "offer") {
        await this.answer(msg.offer);
      } else if (msg.type === "answer") {
        await this.handleAnswer(msg.answer);
      } else if (msg.type === "ice-candidate") {
        await this.addIceCandidate(msg.candidate);
      }
    });
  }
}
