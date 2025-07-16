import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Uday bhoi ke samne jamana jhukega",
  });
});

export { registerUser };
