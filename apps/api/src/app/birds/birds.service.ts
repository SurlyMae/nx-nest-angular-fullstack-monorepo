import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Observable, from } from 'rxjs';
import { Bird, BirdDocument } from './schemas/bird.schema';
import { Model } from 'mongoose';
import { Bird as BirdDto } from '@fullstack-monorepo/api-interfaces';

@Injectable()
export class BirdsService {
  constructor(@InjectModel(Bird.name) private birdModel: Model<BirdDocument>) {}

  create(createBirdDto: BirdDto): Observable<Bird> {
    const createdBird = new this.birdModel(createBirdDto);
    return from(createdBird.save());
  }

  updateBird(updateBirdDto: BirdDto): Observable<Bird> {
    return from(
      this.birdModel.findOneAndReplace({ id: updateBirdDto.id }, updateBirdDto)
    );
  }

  findAll(): Observable<Bird[]> {
    return from(this.birdModel.find().exec());
  }

  findOne(id: number): Observable<Bird> {
    return from(this.birdModel.findOne({ id }));
  }

  deleteBird(id: number) {
    return from(this.birdModel.deleteOne({ id }));
  }

  createBirdData(): Observable<Bird[]> {
    const birds: Bird[] = [
      { id: 12, name: 'goldfinch' },
      { id: 13, name: 'sparrow' },
      { id: 14, name: 'robin' },
      { id: 15, name: 'house finch' },
    ];
    return from(this.birdModel.create(...birds));
  }

  deleteAllBirds() {
    return from(this.birdModel.deleteMany({}));
  }
}
