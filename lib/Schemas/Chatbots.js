"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ChatbotTypes_1 = require("./Enum/ChatbotTypes");
const Chatbot = new mongoose_1.Schema({
    id: { type: String, trim: true, default: '' },
    name: { type: String, trim: true, default: '' },
    type: { type: ChatbotTypes_1.ChatBotType, default: 0 }
});
exports.chat_bot = mongoose_1.model('Chatbot', Chatbot);
//# sourceMappingURL=Chatbots.js.map