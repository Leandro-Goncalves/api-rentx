import { inject, injectable } from "tsyringe";

import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAreadyExists = await this.specificationRepository.findByName(
      name
    );

    if (categoryAreadyExists) {
      throw new AppError("Specification already exists");
    }

    await this.specificationRepository.create({ description, name });
  }
}

export { CreateSpecificationUseCase };