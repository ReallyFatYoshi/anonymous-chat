import axios from "axios";

export default class LegalServices {
  /**
   * Fetch all legal documents from the API.
   * @returns {Promise<T>} List of legal documents.
   * @throws {Error} If the request fails.
   */
  static async fetchLegalDocuments<T = any>(): Promise<T> {
    try {
      const response = await axios.get<T>("/api/legal-documents");
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch legal documents");
    }
  }

  /**
   * Fetch a specific legal document by ID.
   * @param {string | number} documentId - The document ID.
   * @returns {Promise<T>} The legal document.
   * @throws {Error} If the request fails.
   */
  static async fetchLegalDocumentById<T = any>(documentId: string | number): Promise<T> {
    try {
      const response = await axios.get<T>(`/api/legal-documents/${documentId}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch legal document");
    }
  }

  /**
   * Fetch the latest version of a legal document.
   * @returns {Promise<T>} The latest legal document.
   * @throws {Error} If the request fails.
   */
  static async fetchLatestLegalDocument<T = any>(): Promise<T> {
    try {
      const response = await axios.get<T>("/api/legal-documents/latest");
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch latest legal document");
    }
  }

  /**
   * Fetch the history of changes for a specific legal document.
   * @param {string | number} documentId - The document ID.
   * @returns {Promise<T>} The document history.
   * @throws {Error} If the request fails.
   */
  static async fetchLegalDocumentHistory<T = any>(documentId: string | number): Promise<T> {
    try {
      const response = await axios.get<T>(`/api/legal-documents/${documentId}/history`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch legal document history");
    }
  }
}
