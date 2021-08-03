import { Request, Response, NextFunction } from "express";
import users from "../responses/users.json";

const getUsers = async (_req: Request, res: Response, _next: NextFunction) => {
  return res.status(200).json(users);
};

export default { getUsers };
