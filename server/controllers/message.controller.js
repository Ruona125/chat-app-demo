import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participant: { $all: [senderId, receiverId] },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participant: [senderId, receiverId],
      });
    }
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    // await conversation.save();
    // await newMessage.save();
    await Promise.all([conversation.save(), newMessage.save()]);
    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sending message", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: userToChat } = req.params;
    const senderId = req.user._id;
    const conversation = await Conversation.findOne({
      participant: { $all: [senderId, userToChat] },
    }).populate("messages")
    res.status(200).json(conversation.messages)
  } catch (error) {
    console.log("Error in getMessage", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
