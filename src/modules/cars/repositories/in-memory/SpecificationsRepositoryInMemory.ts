import { Specification } from "@modules/cars/infra/typeorm/entities";

import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "../ISpecificationRepository";

class SpecificationsRepositoryInMemory implements ISpecificationRepository {
  specifications: Specification[] = [];

  async create({
    description,
    name,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
    });

    this.specifications.push(specification);
    return specification;
  }
  async findByName(name: string): Promise<Specification> {
    return this.specifications.find((s) => s.name === name);
  }
  async findByIds(ids: string[]): Promise<Specification[]> {
    return this.specifications.filter((s) => ids.includes(s.id));
  }
}

export { SpecificationsRepositoryInMemory };
