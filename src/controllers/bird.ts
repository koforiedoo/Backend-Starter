import {Request , Response} from 'express';
import bird from '../models/bird';

export const getAllBirdsRoute = async (req: Request, res: Response) => {
	const birds = await bird.find();
	res.json(birds);
};
export const getBirdById = async (req: Request, res: Response) => {
	const birds = await bird.findById(req.params.id);
	res.json(bird);
  };

export const createBirdRoute = async (req: Request, res: Response) => {
	const birds = new bird(req.body);
	await birds.save();
	console.log(birds);
};
export const updateBirdRoute = async (req: Request, res: Response) => {
	const birds = new bird(req.body);
	await birds.save();
	res.json(bird);
};
export const deleteBirdRoute = async (req: Request, res: Response) => {
	const birds = new bird(req.body);
	await birds.save();
	res.json(bird);	
}



