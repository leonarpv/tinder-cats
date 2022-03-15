import Cat from '../../domain/entities/Cat';
import CatRepository from '../../domain/interfaces/CatRepository';

export default class MockCatRepository implements CatRepository {
  async getList(): Promise<Cat[]> {
    const list: Cat[] = [];
    list.push(
      new Cat({
        title: 'Big Buck Bunny',
        subtitle: 'By Google',
        description:
          "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttps://www.bigbuckbunny.org",
        src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        thumbnail:
          'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
      }),
    );
    list.push(
      new Cat({
        title: 'Big Buck Bunny 2',
        subtitle: 'By Google 2',
        description:
          "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttps://www.bigbuckbunny.org",
        src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        thumbnail:
          'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
      }),
    );
    return new Promise(resolve => resolve(list));
  }
}
