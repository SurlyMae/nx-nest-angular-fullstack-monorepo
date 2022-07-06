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
      this.birdModel.findOneAndReplace({ _id: updateBirdDto.id }, updateBirdDto)
    );
  }

  findAll(): Observable<Bird[]> {
    return from(this.birdModel.find().exec());
  }

  findOne(id: string): Observable<Bird> {
    return from(this.birdModel.findOne({ _id: id }));
  }

  deleteBird(id: number) {
    return from(this.birdModel.deleteOne({ _id: id }));
  }

  createBirdData(): Observable<Bird[]> {
    const birds: Bird[] = [
      { name: 'goldfinch' },
      { name: 'sparrow' },
      { name: 'robin' },
      { name: 'house finch' },
    ];
    return from(this.birdModel.insertMany(birds));
  }

  deleteAllBirds() {
    return from(this.birdModel.deleteMany({}));
  }
}
