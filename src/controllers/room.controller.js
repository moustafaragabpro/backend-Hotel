import { Router } from 'express';
import roomService from '../services/room/_index.services.js';

const roomRouter = Router();

roomRouter.get('/', roomService.getAllRooms); // * Done
roomRouter.get('/:id', roomService.getRoomById); // * Done
roomRouter.post('/', roomService.createRoom); // * Done
roomRouter.put('/:id', roomService.updateRoom); // * Done
roomRouter.delete('/:id', roomService.deleteRoom); // * Done

export default roomRouter;
