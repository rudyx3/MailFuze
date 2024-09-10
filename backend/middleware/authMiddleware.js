import { createClerkClient } from "@clerk/clerk-sdk-node";
const clerkClient = createClerkClient({
    secretKey: process.env.CLERK_SECRET_KEY,
})

//this function is a basic middleware that uses the session token to verify using clerk auth
export const authenticateUser = async (req, res, next) => {
  try {
    const sessionId = req.headers["authorization"]?.split(" ")[1];
    if (!sessionId) {
      return res
        .status(401)
        .json({ message: "No Token Found" });
    }

    
    const session = await clerkClient.sessions.getSession(sessionId);
    if (!session) {
      return res.status(401).json({ message: "Invalid or session expired" });
    }

    req.userId = session.userId;
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
