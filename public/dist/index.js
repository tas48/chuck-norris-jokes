"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const url = "https://api.chucknorris.io/jokes/random";
const paragraph = document.querySelector(".joke-text");
function getJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch(url);
        let data = yield response.json();
        try {
            if (response.status != 200) {
                throw new Error("Cannot get any response from server");
            }
        }
        catch (error) {
            console.log(error);
        }
        paragraph.textContent = `"${data.value}"`;
    });
}
getJoke();
//# sourceMappingURL=index.js.map