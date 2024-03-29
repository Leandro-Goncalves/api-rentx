import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listCategoryUseCase = container.resolve(ListCategoriesUseCase);

    const all = await listCategoryUseCase.execute();

    return res.status(200).json(all);
  }
}

export { ListCategoriesController };
