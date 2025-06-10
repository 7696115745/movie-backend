import sequelize from "../util/index";
import bcrypt from "bcrypt";
import SignupTable from "../models/signup.model";
 
export const createAccount = async (req: any, res: any) => {
  const transaction = await sequelize.transaction();

  try {
    const { user_email, user_password } = req.body;

    const userExists = await SignupTable.findOne({
      where: { user_email },
    });

    if (userExists) {
      return res.status(400).json({
        success: false,
        message: "User already exists with this email ID",
      });
    }

    const hashedPassword = await bcrypt.hash(user_password, 10);

    const newUser = await SignupTable.create(
      {
        date: new Date(),
        user_email,
        user_password: hashedPassword,
      },
      { transaction }
    );

    await transaction.commit();

    return res.status(200).json({
      success: true,
      message: "Account created successfully",
      data: newUser,
    });

  } catch (error: any) {
    await transaction.rollback();
    console.error("Account creation failed:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "An error occurred while creating the account",
    });
  }
};
