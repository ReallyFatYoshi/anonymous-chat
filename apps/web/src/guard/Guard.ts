import { redirect } from "react-router";
import { toast } from "react-toastify";

export default class Guard {
    static login(): void {
        const token = localStorage.getItem("token");
        
        if (token) {
            const user = localStorage.getItem("user");
            if (user) {
                const parsedUser = JSON.parse(user);
                if (parsedUser.role === "admin") {
                    window.location.href = "/admin";
                } else if (parsedUser.role === "member") {
                    window.location.href = "/member";
                } else {
                    window.location.href = "/";
                }
            } else {
                window.location.href = "/";
            }
        }

        toast.error("You were unable to login. Please try again.");
        redirect("/login");
    }

    /**
     * Check if the user is authenticated.
     * @returns {boolean} True if authenticated, false otherwise.
     */
    static isAuthenticated(): boolean {
        return !!localStorage.getItem("token");
    }

    /**
     * Check if the user is an admin.
     * @returns {boolean} True if admin, false otherwise.
     */
    static isAdmin(): boolean {
        const user = localStorage.getItem("user");
        if (!user) return false;
        const parsedUser = JSON.parse(user);
        return parsedUser.role === "admin";
    }

    /**
     * Check if the user is a guest.
     * @returns {boolean} True if guest, false otherwise.
     */
    static isGuest(): boolean {
        return !this.isAuthenticated();
    }

    /**
     * Check if the user is a member.
     * @returns {boolean} True if member, false otherwise.
     */
    static isMember(): boolean {
        const user = localStorage.getItem("user");
        if (!user) return false;
        const parsedUser = JSON.parse(user);
        return parsedUser.role === "member";
    }
}