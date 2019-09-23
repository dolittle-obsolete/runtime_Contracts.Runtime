"use strict";
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();
var system_value_pb = require('../../system/value_pb.js');
goog.object.extend(proto, system_value_pb);
goog.exportSymbol('proto.dolittle.events.relativity.PropertyBag', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dolittle.events.relativity.PropertyBag = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dolittle.events.relativity.PropertyBag, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    /**
     * @public
     * @override
     */
    proto.dolittle.events.relativity.PropertyBag.displayName = 'proto.dolittle.events.relativity.PropertyBag';
}
if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto suitable for use in Soy templates.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
     * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
     *     for transitional soy proto support: http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.dolittle.events.relativity.PropertyBag.prototype.toObject = function (opt_includeInstance) {
        return proto.dolittle.events.relativity.PropertyBag.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.dolittle.events.relativity.PropertyBag} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.dolittle.events.relativity.PropertyBag.toObject = function (includeInstance, msg) {
        var f, obj = {
            valuesMap: (f = msg.getValuesMap()) ? f.toObject(includeInstance, proto.system.Value.toObject) : []
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dolittle.events.relativity.PropertyBag}
 */
proto.dolittle.events.relativity.PropertyBag.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.dolittle.events.relativity.PropertyBag;
    return proto.dolittle.events.relativity.PropertyBag.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dolittle.events.relativity.PropertyBag} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dolittle.events.relativity.PropertyBag}
 */
proto.dolittle.events.relativity.PropertyBag.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = msg.getValuesMap();
                reader.readMessage(value, function (message, reader) {
                    jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.system.Value.deserializeBinaryFromReader, "");
                });
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dolittle.events.relativity.PropertyBag.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.dolittle.events.relativity.PropertyBag.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dolittle.events.relativity.PropertyBag} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dolittle.events.relativity.PropertyBag.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getValuesMap(true);
    if (f && f.getLength() > 0) {
        f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.system.Value.serializeBinaryToWriter);
    }
};
/**
 * map<string, system.Value> values = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.system.Value>}
 */
proto.dolittle.events.relativity.PropertyBag.prototype.getValuesMap = function (opt_noLazyCreate) {
    return /** @type {!jspb.Map<string,!proto.system.Value>} */ (jspb.Message.getMapField(this, 1, opt_noLazyCreate, proto.system.Value));
};
/**
 * Clears values from the map. The map will be non-null.
 */
proto.dolittle.events.relativity.PropertyBag.prototype.clearValuesMap = function () {
    this.getValuesMap().clear();
};
goog.object.extend(exports, proto.dolittle.events.relativity);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHlfYmFnX3BiLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJFdmVudHMuUmVsYXRpdml0eS9pbnRlcmFjdGlvbi9wcm9wZXJ0eV9iYWdfcGIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUNILGlDQUFpQztBQUVqQyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUN0QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFDaEIsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7QUFFdkMsSUFBSSxlQUFlLEdBQUcsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDMUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQzNDLElBQUksQ0FBQyxZQUFZLENBQUMsOENBQThDLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2hGOzs7Ozs7Ozs7R0FTRztBQUNILEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsVUFBUyxRQUFRO0lBQzlELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM3RCxDQUFDLENBQUM7QUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzFFLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLFFBQVEsRUFBRTtJQUMzQjs7O09BR0c7SUFDSCxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFdBQVcsR0FBRyw4Q0FBOEMsQ0FBQztDQUMzRztBQUlELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRTtJQUNyQzs7Ozs7Ozs7O09BU0c7SUFDSCxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsVUFBUyxtQkFBbUI7UUFDNUYsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxRixDQUFDLENBQUM7SUFHRjs7Ozs7Ozs7T0FRRztJQUNILEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLFVBQVMsZUFBZSxFQUFFLEdBQUc7UUFDbkYsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHO1lBQ1gsU0FBUyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtTQUNwRyxDQUFDO1FBRUYsSUFBSSxlQUFlLEVBQUU7WUFDbkIsR0FBRyxDQUFDLG9CQUFvQixHQUFHLEdBQUcsQ0FBQztTQUNoQztRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQyxDQUFDO0NBQ0Q7QUFHRDs7OztHQUlHO0FBQ0gsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsR0FBRyxVQUFTLEtBQUs7SUFDN0UsSUFBSSxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLElBQUksR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztJQUMzRCxPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsMkJBQTJCLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQy9GLENBQUMsQ0FBQztBQUdGOzs7Ozs7R0FNRztBQUNILEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsMkJBQTJCLEdBQUcsVUFBUyxHQUFHLEVBQUUsTUFBTTtJQUM3RixPQUFPLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFBRTtRQUN6QixJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUN2QixNQUFNO1NBQ1A7UUFDRCxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDcEMsUUFBUSxLQUFLLEVBQUU7WUFDZixLQUFLLENBQUM7Z0JBQ0osSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUMvQixNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxVQUFTLE9BQU8sRUFBRSxNQUFNO29CQUNoRCxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDaEwsQ0FBQyxDQUFDLENBQUM7Z0JBQ04sTUFBTTtZQUNSO2dCQUNFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDbkIsTUFBTTtTQUNQO0tBQ0Y7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMsQ0FBQztBQUdGOzs7R0FHRztBQUNILEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGVBQWUsR0FBRztJQUN2RSxJQUFJLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNuRixPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUNsQyxDQUFDLENBQUM7QUFHRjs7Ozs7O0dBTUc7QUFDSCxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLHVCQUF1QixHQUFHLFVBQVMsT0FBTyxFQUFFLE1BQU07SUFDN0YsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBQ2xCLENBQUMsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLEVBQUU7UUFDMUIsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztLQUM3SjtBQUNILENBQUMsQ0FBQztBQUdGOzs7OztHQUtHO0FBQ0gsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLFVBQVMsZ0JBQWdCO0lBQzdGLE9BQU8sb0RBQW9ELENBQUMsQ0FDeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxnQkFBZ0IsRUFDbEQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FBQztBQUdGOztHQUVHO0FBQ0gsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHO0lBQ3RFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUM5QixDQUFDLENBQUM7QUFHRixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqIEBlbmhhbmNlYWJsZVxuICogQHN1cHByZXNzIHttZXNzYWdlQ29udmVudGlvbnN9IEpTIENvbXBpbGVyIHJlcG9ydHMgYW4gZXJyb3IgaWYgYSB2YXJpYWJsZSBvclxuICogICAgIGZpZWxkIHN0YXJ0cyB3aXRoICdNU0dfJyBhbmQgaXNuJ3QgYSB0cmFuc2xhdGFibGUgbWVzc2FnZS5cbiAqIEBwdWJsaWNcbiAqL1xuLy8gR0VORVJBVEVEIENPREUgLS0gRE8gTk9UIEVESVQhXG5cbnZhciBqc3BiID0gcmVxdWlyZSgnZ29vZ2xlLXByb3RvYnVmJyk7XG52YXIgZ29vZyA9IGpzcGI7XG52YXIgZ2xvYmFsID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxudmFyIHN5c3RlbV92YWx1ZV9wYiA9IHJlcXVpcmUoJy4uLy4uL3N5c3RlbS92YWx1ZV9wYi5qcycpO1xuZ29vZy5vYmplY3QuZXh0ZW5kKHByb3RvLCBzeXN0ZW1fdmFsdWVfcGIpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmRvbGl0dGxlLmV2ZW50cy5yZWxhdGl2aXR5LlByb3BlcnR5QmFnJywgbnVsbCwgZ2xvYmFsKTtcbi8qKlxuICogR2VuZXJhdGVkIGJ5IEpzUGJDb2RlR2VuZXJhdG9yLlxuICogQHBhcmFtIHtBcnJheT19IG9wdF9kYXRhIE9wdGlvbmFsIGluaXRpYWwgZGF0YSBhcnJheSwgdHlwaWNhbGx5IGZyb20gYVxuICogc2VydmVyIHJlc3BvbnNlLCBvciBjb25zdHJ1Y3RlZCBkaXJlY3RseSBpbiBKYXZhc2NyaXB0LiBUaGUgYXJyYXkgaXMgdXNlZFxuICogaW4gcGxhY2UgYW5kIGJlY29tZXMgcGFydCBvZiB0aGUgY29uc3RydWN0ZWQgb2JqZWN0LiBJdCBpcyBub3QgY2xvbmVkLlxuICogSWYgbm8gZGF0YSBpcyBwcm92aWRlZCwgdGhlIGNvbnN0cnVjdGVkIG9iamVjdCB3aWxsIGJlIGVtcHR5LCBidXQgc3RpbGxcbiAqIHZhbGlkLlxuICogQGV4dGVuZHMge2pzcGIuTWVzc2FnZX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5wcm90by5kb2xpdHRsZS5ldmVudHMucmVsYXRpdml0eS5Qcm9wZXJ0eUJhZyA9IGZ1bmN0aW9uKG9wdF9kYXRhKSB7XG4gIGpzcGIuTWVzc2FnZS5pbml0aWFsaXplKHRoaXMsIG9wdF9kYXRhLCAwLCAtMSwgbnVsbCwgbnVsbCk7XG59O1xuZ29vZy5pbmhlcml0cyhwcm90by5kb2xpdHRsZS5ldmVudHMucmVsYXRpdml0eS5Qcm9wZXJ0eUJhZywganNwYi5NZXNzYWdlKTtcbmlmIChnb29nLkRFQlVHICYmICFDT01QSUxFRCkge1xuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RvLmRvbGl0dGxlLmV2ZW50cy5yZWxhdGl2aXR5LlByb3BlcnR5QmFnLmRpc3BsYXlOYW1lID0gJ3Byb3RvLmRvbGl0dGxlLmV2ZW50cy5yZWxhdGl2aXR5LlByb3BlcnR5QmFnJztcbn1cblxuXG5cbmlmIChqc3BiLk1lc3NhZ2UuR0VORVJBVEVfVE9fT0JKRUNUKSB7XG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgcHJvdG8gc3VpdGFibGUgZm9yIHVzZSBpbiBTb3kgdGVtcGxhdGVzLlxuICogRmllbGQgbmFtZXMgdGhhdCBhcmUgcmVzZXJ2ZWQgaW4gSmF2YVNjcmlwdCBhbmQgd2lsbCBiZSByZW5hbWVkIHRvIHBiX25hbWUuXG4gKiBUbyBhY2Nlc3MgYSByZXNlcnZlZCBmaWVsZCB1c2UsIGZvby5wYl88bmFtZT4sIGVnLCBmb28ucGJfZGVmYXVsdC5cbiAqIEZvciB0aGUgbGlzdCBvZiByZXNlcnZlZCBuYW1lcyBwbGVhc2Ugc2VlOlxuICogICAgIGNvbS5nb29nbGUuYXBwcy5qc3BiLkpzQ2xhc3NUZW1wbGF0ZS5KU19SRVNFUlZFRF9XT1JEUy5cbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdF9pbmNsdWRlSW5zdGFuY2UgV2hldGhlciB0byBpbmNsdWRlIHRoZSBKU1BCIGluc3RhbmNlXG4gKiAgICAgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDogaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHJldHVybiB7IU9iamVjdH1cbiAqL1xucHJvdG8uZG9saXR0bGUuZXZlbnRzLnJlbGF0aXZpdHkuUHJvcGVydHlCYWcucHJvdG90eXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24ob3B0X2luY2x1ZGVJbnN0YW5jZSkge1xuICByZXR1cm4gcHJvdG8uZG9saXR0bGUuZXZlbnRzLnJlbGF0aXZpdHkuUHJvcGVydHlCYWcudG9PYmplY3Qob3B0X2luY2x1ZGVJbnN0YW5jZSwgdGhpcyk7XG59O1xuXG5cbi8qKlxuICogU3RhdGljIHZlcnNpb24gb2YgdGhlIHtAc2VlIHRvT2JqZWN0fSBtZXRob2QuXG4gKiBAcGFyYW0ge2Jvb2xlYW58dW5kZWZpbmVkfSBpbmNsdWRlSW5zdGFuY2UgV2hldGhlciB0byBpbmNsdWRlIHRoZSBKU1BCXG4gKiAgICAgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcGFyYW0geyFwcm90by5kb2xpdHRsZS5ldmVudHMucmVsYXRpdml0eS5Qcm9wZXJ0eUJhZ30gbXNnIFRoZSBtc2cgaW5zdGFuY2UgdG8gdHJhbnNmb3JtLlxuICogQHJldHVybiB7IU9iamVjdH1cbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8uZG9saXR0bGUuZXZlbnRzLnJlbGF0aXZpdHkuUHJvcGVydHlCYWcudG9PYmplY3QgPSBmdW5jdGlvbihpbmNsdWRlSW5zdGFuY2UsIG1zZykge1xuICB2YXIgZiwgb2JqID0ge1xuICAgIHZhbHVlc01hcDogKGYgPSBtc2cuZ2V0VmFsdWVzTWFwKCkpID8gZi50b09iamVjdChpbmNsdWRlSW5zdGFuY2UsIHByb3RvLnN5c3RlbS5WYWx1ZS50b09iamVjdCkgOiBbXVxuICB9O1xuXG4gIGlmIChpbmNsdWRlSW5zdGFuY2UpIHtcbiAgICBvYmouJGpzcGJNZXNzYWdlSW5zdGFuY2UgPSBtc2c7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG59XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEBwYXJhbSB7anNwYi5CeXRlU291cmNlfSBieXRlcyBUaGUgYnl0ZXMgdG8gZGVzZXJpYWxpemUuXG4gKiBAcmV0dXJuIHshcHJvdG8uZG9saXR0bGUuZXZlbnRzLnJlbGF0aXZpdHkuUHJvcGVydHlCYWd9XG4gKi9cbnByb3RvLmRvbGl0dGxlLmV2ZW50cy5yZWxhdGl2aXR5LlByb3BlcnR5QmFnLmRlc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oYnl0ZXMpIHtcbiAgdmFyIHJlYWRlciA9IG5ldyBqc3BiLkJpbmFyeVJlYWRlcihieXRlcyk7XG4gIHZhciBtc2cgPSBuZXcgcHJvdG8uZG9saXR0bGUuZXZlbnRzLnJlbGF0aXZpdHkuUHJvcGVydHlCYWc7XG4gIHJldHVybiBwcm90by5kb2xpdHRsZS5ldmVudHMucmVsYXRpdml0eS5Qcm9wZXJ0eUJhZy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIobXNnLCByZWFkZXIpO1xufTtcblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpIGZyb20gdGhlXG4gKiBnaXZlbiByZWFkZXIgaW50byB0aGUgZ2l2ZW4gbWVzc2FnZSBvYmplY3QuXG4gKiBAcGFyYW0geyFwcm90by5kb2xpdHRsZS5ldmVudHMucmVsYXRpdml0eS5Qcm9wZXJ0eUJhZ30gbXNnIFRoZSBtZXNzYWdlIG9iamVjdCB0byBkZXNlcmlhbGl6ZSBpbnRvLlxuICogQHBhcmFtIHshanNwYi5CaW5hcnlSZWFkZXJ9IHJlYWRlciBUaGUgQmluYXJ5UmVhZGVyIHRvIHVzZS5cbiAqIEByZXR1cm4geyFwcm90by5kb2xpdHRsZS5ldmVudHMucmVsYXRpdml0eS5Qcm9wZXJ0eUJhZ31cbiAqL1xucHJvdG8uZG9saXR0bGUuZXZlbnRzLnJlbGF0aXZpdHkuUHJvcGVydHlCYWcuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyID0gZnVuY3Rpb24obXNnLCByZWFkZXIpIHtcbiAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgdmFyIGZpZWxkID0gcmVhZGVyLmdldEZpZWxkTnVtYmVyKCk7XG4gICAgc3dpdGNoIChmaWVsZCkge1xuICAgIGNhc2UgMTpcbiAgICAgIHZhciB2YWx1ZSA9IG1zZy5nZXRWYWx1ZXNNYXAoKTtcbiAgICAgIHJlYWRlci5yZWFkTWVzc2FnZSh2YWx1ZSwgZnVuY3Rpb24obWVzc2FnZSwgcmVhZGVyKSB7XG4gICAgICAgIGpzcGIuTWFwLmRlc2VyaWFsaXplQmluYXJ5KG1lc3NhZ2UsIHJlYWRlciwganNwYi5CaW5hcnlSZWFkZXIucHJvdG90eXBlLnJlYWRTdHJpbmcsIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkTWVzc2FnZSwgcHJvdG8uc3lzdGVtLlZhbHVlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlciwgXCJcIik7XG4gICAgICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1zZztcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcmV0dXJuIHshVWludDhBcnJheX1cbiAqL1xucHJvdG8uZG9saXR0bGUuZXZlbnRzLnJlbGF0aXZpdHkuUHJvcGVydHlCYWcucHJvdG90eXBlLnNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgd3JpdGVyID0gbmV3IGpzcGIuQmluYXJ5V3JpdGVyKCk7XG4gIHByb3RvLmRvbGl0dGxlLmV2ZW50cy5yZWxhdGl2aXR5LlByb3BlcnR5QmFnLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgZ2l2ZW4gbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZVxuICogZm9ybWF0KSwgd3JpdGluZyB0byB0aGUgZ2l2ZW4gQmluYXJ5V3JpdGVyLlxuICogQHBhcmFtIHshcHJvdG8uZG9saXR0bGUuZXZlbnRzLnJlbGF0aXZpdHkuUHJvcGVydHlCYWd9IG1lc3NhZ2VcbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5V3JpdGVyfSB3cml0ZXJcbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8uZG9saXR0bGUuZXZlbnRzLnJlbGF0aXZpdHkuUHJvcGVydHlCYWcuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIgPSBmdW5jdGlvbihtZXNzYWdlLCB3cml0ZXIpIHtcbiAgdmFyIGYgPSB1bmRlZmluZWQ7XG4gIGYgPSBtZXNzYWdlLmdldFZhbHVlc01hcCh0cnVlKTtcbiAgaWYgKGYgJiYgZi5nZXRMZW5ndGgoKSA+IDApIHtcbiAgICBmLnNlcmlhbGl6ZUJpbmFyeSgxLCB3cml0ZXIsIGpzcGIuQmluYXJ5V3JpdGVyLnByb3RvdHlwZS53cml0ZVN0cmluZywganNwYi5CaW5hcnlXcml0ZXIucHJvdG90eXBlLndyaXRlTWVzc2FnZSwgcHJvdG8uc3lzdGVtLlZhbHVlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIG1hcDxzdHJpbmcsIHN5c3RlbS5WYWx1ZT4gdmFsdWVzID0gMTtcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdF9ub0xhenlDcmVhdGUgRG8gbm90IGNyZWF0ZSB0aGUgbWFwIGlmXG4gKiBlbXB0eSwgaW5zdGVhZCByZXR1cm5pbmcgYHVuZGVmaW5lZGBcbiAqIEByZXR1cm4geyFqc3BiLk1hcDxzdHJpbmcsIXByb3RvLnN5c3RlbS5WYWx1ZT59XG4gKi9cbnByb3RvLmRvbGl0dGxlLmV2ZW50cy5yZWxhdGl2aXR5LlByb3BlcnR5QmFnLnByb3RvdHlwZS5nZXRWYWx1ZXNNYXAgPSBmdW5jdGlvbihvcHRfbm9MYXp5Q3JlYXRlKSB7XG4gIHJldHVybiAvKiogQHR5cGUgeyFqc3BiLk1hcDxzdHJpbmcsIXByb3RvLnN5c3RlbS5WYWx1ZT59ICovIChcbiAgICAgIGpzcGIuTWVzc2FnZS5nZXRNYXBGaWVsZCh0aGlzLCAxLCBvcHRfbm9MYXp5Q3JlYXRlLFxuICAgICAgcHJvdG8uc3lzdGVtLlZhbHVlKSk7XG59O1xuXG5cbi8qKlxuICogQ2xlYXJzIHZhbHVlcyBmcm9tIHRoZSBtYXAuIFRoZSBtYXAgd2lsbCBiZSBub24tbnVsbC5cbiAqL1xucHJvdG8uZG9saXR0bGUuZXZlbnRzLnJlbGF0aXZpdHkuUHJvcGVydHlCYWcucHJvdG90eXBlLmNsZWFyVmFsdWVzTWFwID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZ2V0VmFsdWVzTWFwKCkuY2xlYXIoKTtcbn07XG5cblxuZ29vZy5vYmplY3QuZXh0ZW5kKGV4cG9ydHMsIHByb3RvLmRvbGl0dGxlLmV2ZW50cy5yZWxhdGl2aXR5KTtcbiJdfQ==