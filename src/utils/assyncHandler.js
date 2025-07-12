const assyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHnadler(req, res, next)).catch((err) => next(err));
  };
};

export { assyncHandler };

// const assyncHandler = (fn) => async (req,res,next) => {
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })

//     }
// }
