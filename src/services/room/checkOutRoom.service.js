import { PrismaClient } from '@prisma/client';
import responses from '../../helpers/responses.js';

const checkOut = async (req, res, next) => {
    try {
        const prisma = new PrismaClient();
        const { id } = req.params;
        const { cost, feedback } = req.body;

        const { id: rid, ...reservedRoom } =
            await prisma.reservedRoom.findUnique({
                where: { id: +id },
            });
        if (!reservedRoom)
            return responses.notFound(res, 'No reserved room with given id');

        const checkout = await prisma.checkedOutRooms.create({
            data: {
                ...reservedRoom,
                cost,
                feedback,
            },
        });

        return responses.success(res, 'checkedOut successfully', checkout);
    } catch (error) {
        next(error);
    }
};
export default checkOut;
