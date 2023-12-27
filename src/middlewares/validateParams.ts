import { Request, Response, NextFunction } from 'express';
import { isObjectNotEmpty } from '../utils/emails';
export const validateParams = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (!isObjectNotEmpty(req.body)) {
		return res.status(400).send('Error receiving params');
	}
	next();
};
