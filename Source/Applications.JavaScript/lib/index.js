"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const management = __importStar(require("./Application/management/index"));
exports.management = management;
const server = __importStar(require("./Application/server/index"));
exports.server = server;
const grpc = __importStar(require("grpc"));
exports.grpc = grpc;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Z0dBR2dHO0FBQ2hHLDJFQUE2RDtBQUk5QyxnQ0FBVTtBQUh6QixtRUFBcUQ7QUFHMUIsd0JBQU07QUFGakMsMkNBQTZCO0FBRXBCLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIERvbGl0dGxlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuaW1wb3J0ICogYXMgbWFuYWdlbWVudCBmcm9tICcuL0FwcGxpY2F0aW9uL21hbmFnZW1lbnQvaW5kZXgnO1xuaW1wb3J0ICogYXMgc2VydmVyIGZyb20gJy4vQXBwbGljYXRpb24vc2VydmVyL2luZGV4JztcbmltcG9ydCAqIGFzIGdycGMgZnJvbSAnZ3JwYyc7XG5cbmV4cG9ydCB7IGdycGMsIG1hbmFnZW1lbnQsIHNlcnZlciB9O1xuIl19