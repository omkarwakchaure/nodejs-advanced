const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (err) {
    return res.status(500).json({ message: err.message, success: false });
  }
};

export { asyncHandler };