import { Request, Response, NextFunction } from 'express';
import bird from '../models/bird';

// Get all birds
export const getAllBirdsRoute = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const birds = await bird.find();
    res.status(200).json(birds);
  } catch (error) {
    next(error); // Forward error to the error-handling middleware
  }
};

// Get bird by ID
export const getBirdById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
	  const birdData = await bird.findById(req.params.id);
	  if (!birdData) {
		res.status(404).json({ error: 'Bird not found' });
		return;
	  }
	  res.status(200).json(birdData);
	} catch (error) {
	  next(error);
	}
  };
  

// Create a new bird
export const createBirdRoute = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newBird = new bird(req.body);
    await newBird.save();
    res.status(201).json(newBird);
  } catch (error) {
    next(error);
  }
};

// Update an existing bird
export const updateBirdRoute = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const updatedBird = await bird.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBird) {
      res.status(404).json({ error: 'Bird not found' });
      return;
    }
    res.status(200).json(updatedBird);
  } catch (error) {
    next(error);
  }
};

// Delete a bird
export const deleteBirdRoute = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
	  const deletedBird = await bird.findByIdAndDelete(req.params.id);
	  if (!deletedBird) {
		res.status(404).json({ error: 'Bird not found' });
		return;
	  }
	  res.status(200).json({ message: 'Bird deleted successfully' });
	} catch (error) {
	  next(error);
	}
  };
  