import createRoom from './createRoom.service.js';
import deleteRoom from './deleteRoom.service.js';
import getAllRooms from './getAllRooms.service.js';
import getRoomById from './getRoomById.service.js';
import updateRoom from './UpdateRoom.service.js';

const roomService = {
    getAllRooms,
    getRoomById,
    createRoom,
    updateRoom,
    deleteRoom,
};
export default roomService;
