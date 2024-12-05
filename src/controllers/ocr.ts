import { createResponse } from "../utils/response";
import { Request, Response } from "express";

const ocrController = {
  post: async (req: Request, res: Response) => {
    // get image data
    const photo = req.file;

    if (!photo) {
      createResponse.error({
        status: 400,
        res,
        message: "Please upload a file",
      });
      return;
    }

    const getORD = (image: Express.Multer.File) => {
      console.log(image);

      return {
        resultCode: 200,
        message: "Success",
        data: {
          products: [
            {
              name: "GRNIER M.COOLFOAM50",
              price: "39,800",
            },
            {
              name: "PLASTIK KCL",
              price: "1",
            },
          ],
          discount: null,
          total: "39,800",
        },
      };
    };

    const mockData = getORD(photo).data;

    setTimeout(() => {
      createResponse.success({
        res,
        message: `OCR process success, photo file : ${photo.originalname}`,
        data: mockData,
      });
    }, 1000);
  },
};

export default ocrController;
