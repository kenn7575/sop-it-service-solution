declare global {
  namespace Express {
    interface Request {
      user?: user | null;
    }
  }
}

export {};
