const httpStatus = require("http-status");
const catchAsync = require("../helpers/catchAsync");

const UserService = require("../services/user.services");

const getUserDetails = catchAsync(async (req, res, next) => {
  const { firebaseUid } = req;

  const userDetails = await UserService.getUserDetails(firebaseUid);

  return res.status(httpStatus.OK).json({
    code: httpStatus.FOUND,
    status: httpStatus[httpStatus.OK],
    message: "Successfully fetched the details of the user",
    data: userDetails,
  });
});

const updateUserDetails = catchAsync(async (req, res, next) => {
  const { firebaseUid } = req;

  const data = req.body;
  const updateUserDetails = await UserService.updateUserDetails(
    firebaseUid,
    data
  );

  return res.status(httpStatus.OK).json({
    code: httpStatus.OK,
    status: httpStatus[httpStatus.OK],
    message: "Successfully updated the details of the user",
    data: null,
  });
});

module.exports = {
  getUserDetails,
  updateUserDetails,
};
