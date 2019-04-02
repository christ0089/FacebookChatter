import { Document, Schema, Model, model} from "mongoose";
import { Chatbot } from "../Models/Chatbots";
import { ChatBotType } from "./Enum/ChatbotTypes";

export interface ChatbotModel extends Chatbot, Document {
    getFullData();
}

const Chatbot:Schema = new Schema({
    id: {type : String, trim: true, default: ''} ,
    name : {type : String, trim : true, default: ''},
    type : {type: ChatBotType, default: 0}
})

export const chat_bot : Model<ChatbotModel> = model<ChatbotModel>('Chatbot',Chatbot);

