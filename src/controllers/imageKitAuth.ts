import { Request, Response } from "express";
import ImageKit from "imagekit";

export async function getImageAuth(req: Request, res: Response) {
  try {
    const imagekit = new ImageKit({
      urlEndpoint: "https://ik.imagekit.io/drunkalien/",
      publicKey: "public_TatTyIBt18yMljbpEbb1BgmYCpY=",
      privateKey: "private_Wgbe5UTAysqY9VDpWW8iIRqHHqY=",
    });

    res.status(200).json(imagekit.getAuthenticationParameters());
  } catch (error) {
    console.error(error);
  }
}
