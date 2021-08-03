import { Request, Response, NextFunction } from "express";
import components from "../responses/components.json";

const getComponents = async (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  return res.status(200).json(components);
};

export default { getComponents };
