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
var Events_Relativity_interaction_committed_event_stream_pb = require('../../Events.Relativity/interaction/committed_event_stream_pb.js');
goog.object.extend(proto, Events_Relativity_interaction_committed_event_stream_pb);
var Events_Relativity_interaction_execution_context_pb = require('../../Events.Relativity/interaction/execution_context_pb.js');
goog.object.extend(proto, Events_Relativity_interaction_execution_context_pb);
goog.exportSymbol('proto.dolittle.events.relativity.CommittedEventStreamWithContext', null, global);
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
proto.dolittle.events.relativity.CommittedEventStreamWithContext = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dolittle.events.relativity.CommittedEventStreamWithContext, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    /**
     * @public
     * @override
     */
    proto.dolittle.events.relativity.CommittedEventStreamWithContext.displayName = 'proto.dolittle.events.relativity.CommittedEventStreamWithContext';
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
    proto.dolittle.events.relativity.CommittedEventStreamWithContext.prototype.toObject = function (opt_includeInstance) {
        return proto.dolittle.events.relativity.CommittedEventStreamWithContext.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.dolittle.events.relativity.CommittedEventStreamWithContext} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.dolittle.events.relativity.CommittedEventStreamWithContext.toObject = function (includeInstance, msg) {
        var f, obj = {
            commit: (f = msg.getCommit()) && Events_Relativity_interaction_committed_event_stream_pb.CommittedEventStream.toObject(includeInstance, f),
            context: (f = msg.getContext()) && Events_Relativity_interaction_execution_context_pb.ExecutionContext.toObject(includeInstance, f)
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
 * @return {!proto.dolittle.events.relativity.CommittedEventStreamWithContext}
 */
proto.dolittle.events.relativity.CommittedEventStreamWithContext.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.dolittle.events.relativity.CommittedEventStreamWithContext;
    return proto.dolittle.events.relativity.CommittedEventStreamWithContext.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dolittle.events.relativity.CommittedEventStreamWithContext} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dolittle.events.relativity.CommittedEventStreamWithContext}
 */
proto.dolittle.events.relativity.CommittedEventStreamWithContext.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new Events_Relativity_interaction_committed_event_stream_pb.CommittedEventStream;
                reader.readMessage(value, Events_Relativity_interaction_committed_event_stream_pb.CommittedEventStream.deserializeBinaryFromReader);
                msg.setCommit(value);
                break;
            case 2:
                var value = new Events_Relativity_interaction_execution_context_pb.ExecutionContext;
                reader.readMessage(value, Events_Relativity_interaction_execution_context_pb.ExecutionContext.deserializeBinaryFromReader);
                msg.setContext(value);
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
proto.dolittle.events.relativity.CommittedEventStreamWithContext.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.dolittle.events.relativity.CommittedEventStreamWithContext.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dolittle.events.relativity.CommittedEventStreamWithContext} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dolittle.events.relativity.CommittedEventStreamWithContext.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getCommit();
    if (f != null) {
        writer.writeMessage(1, f, Events_Relativity_interaction_committed_event_stream_pb.CommittedEventStream.serializeBinaryToWriter);
    }
    f = message.getContext();
    if (f != null) {
        writer.writeMessage(2, f, Events_Relativity_interaction_execution_context_pb.ExecutionContext.serializeBinaryToWriter);
    }
};
/**
 * optional CommittedEventStream commit = 1;
 * @return {?proto.dolittle.events.relativity.CommittedEventStream}
 */
proto.dolittle.events.relativity.CommittedEventStreamWithContext.prototype.getCommit = function () {
    return /** @type{?proto.dolittle.events.relativity.CommittedEventStream} */ (jspb.Message.getWrapperField(this, Events_Relativity_interaction_committed_event_stream_pb.CommittedEventStream, 1));
};
/** @param {?proto.dolittle.events.relativity.CommittedEventStream|undefined} value */
proto.dolittle.events.relativity.CommittedEventStreamWithContext.prototype.setCommit = function (value) {
    jspb.Message.setWrapperField(this, 1, value);
};
/**
 * Clears the message field making it undefined.
 */
proto.dolittle.events.relativity.CommittedEventStreamWithContext.prototype.clearCommit = function () {
    this.setCommit(undefined);
};
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dolittle.events.relativity.CommittedEventStreamWithContext.prototype.hasCommit = function () {
    return jspb.Message.getField(this, 1) != null;
};
/**
 * optional ExecutionContext context = 2;
 * @return {?proto.dolittle.events.relativity.ExecutionContext}
 */
proto.dolittle.events.relativity.CommittedEventStreamWithContext.prototype.getContext = function () {
    return /** @type{?proto.dolittle.events.relativity.ExecutionContext} */ (jspb.Message.getWrapperField(this, Events_Relativity_interaction_execution_context_pb.ExecutionContext, 2));
};
/** @param {?proto.dolittle.events.relativity.ExecutionContext|undefined} value */
proto.dolittle.events.relativity.CommittedEventStreamWithContext.prototype.setContext = function (value) {
    jspb.Message.setWrapperField(this, 2, value);
};
/**
 * Clears the message field making it undefined.
 */
proto.dolittle.events.relativity.CommittedEventStreamWithContext.prototype.clearContext = function () {
    this.setContext(undefined);
};
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dolittle.events.relativity.CommittedEventStreamWithContext.prototype.hasContext = function () {
    return jspb.Message.getField(this, 2) != null;
};
goog.object.extend(exports, proto.dolittle.events.relativity);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWl0dGVkX2V2ZW50X3N0cmVhbV93aXRoX2NvbnRleHRfcGIuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbIkV2ZW50cy5SZWxhdGl2aXR5L2ludGVyYWN0aW9uL2NvbW1pdHRlZF9ldmVudF9zdHJlYW1fd2l0aF9jb250ZXh0X3BiLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFDSCxpQ0FBaUM7QUFFakMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDdEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2hCLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO0FBRXZDLElBQUksdURBQXVELEdBQUcsT0FBTyxDQUFDLGtFQUFrRSxDQUFDLENBQUM7QUFDMUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLHVEQUF1RCxDQUFDLENBQUM7QUFDbkYsSUFBSSxrREFBa0QsR0FBRyxPQUFPLENBQUMsNkRBQTZELENBQUMsQ0FBQztBQUNoSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsa0RBQWtELENBQUMsQ0FBQztBQUM5RSxJQUFJLENBQUMsWUFBWSxDQUFDLGtFQUFrRSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNwRzs7Ozs7Ozs7O0dBU0c7QUFDSCxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsK0JBQStCLEdBQUcsVUFBUyxRQUFRO0lBQ2xGLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM3RCxDQUFDLENBQUM7QUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFD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Q0FBQyxVQUFVLEdBQUc7SUFDdEYsT0FBTyxnRUFBZ0UsQ0FBQyxDQUN0RSxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsa0RBQWtELENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoSCxDQUFDLENBQUM7QUFHRixrRkFBa0Y7QUFDbEYsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLCtCQUErQixDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsVUFBUyxLQUFLO0lBQ3BHLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUFDO0FBR0Y7O0dBRUc7QUFDSCxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsK0JBQStCLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRztJQUN4RixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzdCLENBQUMsQ0FBQztBQUdGOzs7R0FHRztBQUNILEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQywrQkFBK0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHO0lBQ3RGLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztBQUNoRCxDQUFDLENBQUM7QUFHRixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqIEBlbmhhbmNlYWJsZVxuICogQHN1cHByZXNzIHttZXNzYWdlQ29udmVudGlvbnN9IEpTIENvbXBpbGVyIHJlcG9ydHMgYW4gZXJyb3IgaWYgYSB2YXJpYWJsZSBvclxuICogICAgIGZpZWxkIHN0YXJ0cyB3aXRoICdNU0dfJyBhbmQgaXNuJ3QgYSB0cmFuc2xhdGFibGUgbWVzc2FnZS5cbiAqIEBwdWJsaWNcbiAqL1xuLy8gR0VORVJBVEVEIENPREUgLS0gRE8gTk9UIEVESVQhXG5cbnZhciBqc3BiID0gcmVxdWlyZSgnZ29vZ2xlLXByb3RvYnVmJyk7XG52YXIgZ29vZyA9IGpzcGI7XG52YXIgZ2xvYmFsID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxudmFyIEV2ZW50c19SZWxhdGl2aXR5X2ludGVyYWN0aW9uX2NvbW1pdHRlZF9ldmVudF9zdHJlYW1fcGIgPSByZXF1aXJlKCcuLi8uLi9FdmVudHMuUmVsYXRpdml0eS9pbnRlcmFjdGlvbi9jb21taXR0ZWRfZXZlbnRfc3RyZWFtX3BiLmpzJyk7XG5nb29nLm9iamVjdC5leHRlbmQocHJvdG8sIEV2ZW50c19SZWxhdGl2aXR5X2ludGVyYWN0aW9uX2NvbW1pdHRlZF9ldmVudF9zdHJlYW1fcGIpO1xudmFyIEV2ZW50c19SZWxhdGl2aXR5X2ludGVyYWN0aW9uX2V4ZWN1dGlvbl9jb250ZXh0X3BiID0gcmVxdWlyZSgnLi4vLi4vRXZlbnRzLlJlbGF0aXZpdHkvaW50ZXJhY3Rpb24vZXhlY3V0aW9uX2NvbnRleHRfcGIuanMnKTtcbmdvb2cub2JqZWN0LmV4dGVuZChwcm90bywgRXZlbnRzX1JlbGF0aXZpdHlfaW50ZXJhY3Rpb25fZXhlY3V0aW9uX2NvbnRleHRfcGIpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLmRvbGl0dGxlLmV2ZW50cy5yZWxhdGl2aXR5LkNvbW1pdHRlZEV2ZW50U3RyZWFtV2l0aENvbnRleHQnLCBudWxsLCBnbG9iYWwpO1xuLyoqXG4gKiBHZW5lcmF0ZWQgYnkgSnNQYkNvZGVHZW5lcmF0b3IuXG4gKiBAcGFyYW0ge0FycmF5PX0gb3B0X2RhdGEgT3B0aW9uYWwgaW5pdGlhbCBkYXRhIGFycmF5LCB0eXBpY2FsbHkgZnJvbSBhXG4gKiBzZXJ2ZXIgcmVzcG9uc2UsIG9yIGNvbnN0cnVjdGVkIGRpcmVjdGx5IGluIEphdmFzY3JpcHQuIFRoZSBhcnJheSBpcyB1c2VkXG4gKiBpbiBwbGFjZSBhbmQgYmVjb21lcyBwYXJ0IG9mIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3QuIEl0IGlzIG5vdCBjbG9uZWQuXG4gKiBJZiBubyBkYXRhIGlzIHByb3ZpZGVkLCB0aGUgY29uc3RydWN0ZWQgb2JqZWN0IHdpbGwgYmUgZW1wdHksIGJ1dCBzdGlsbFxuICogdmFsaWQuXG4gKiBAZXh0ZW5kcyB7anNwYi5NZXNzYWdlfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnByb3RvLmRvbGl0dGxlLmV2ZW50cy5yZWxhdGl2aXR5LkNvbW1pdHRlZEV2ZW50U3RyZWFtV2l0aENvbnRleHQgPSBmdW5jdGlvbihvcHRfZGF0YSkge1xuICBqc3BiLk1lc3NhZ2UuaW5pdGlhbGl6ZSh0aGlzLCBvcHRfZGF0YSwgMCwgLTEsIG51bGwsIG51bGwpO1xufTtcbmdvb2cuaW5oZXJpdHMocHJvdG8uZG9saXR0bGUuZXZlbnRzLnJlbGF0aXZpdHkuQ29tbWl0dGVkRXZlbnRTdHJlYW1XaXRoQ29udGV4dCwganNwYi5NZXNzYWdlKTtcbmlmIChnb29nLkRFQlVHICYmICFDT01QSUxFRCkge1xuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RvLmRvbGl0dGxlLmV2ZW50cy5yZWxhdGl2aXR5LkNvbW1pdHRlZEV2ZW50U3RyZWFtV2l0aENvbnRleHQuZGlzcGxheU5hbWUgPSAncHJvdG8uZG9saXR0bGUuZXZlbnRzLnJlbGF0aXZpdHkuQ29tbWl0dGVkRXZlbnRTdHJlYW1XaXRoQ29udGV4dCc7XG59XG5cblxuXG5pZiAoanNwYi5NZXNzYWdlLkdFTkVSQVRFX1RPX09CSkVDVCkge1xuLyoqXG4gKiBDcmVhdGVzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiB0aGlzIHByb3RvIHN1aXRhYmxlIGZvciB1c2UgaW4gU295IHRlbXBsYXRlcy5cbiAqIEZpZWxkIG5hbWVzIHRoYXQgYXJlIHJlc2VydmVkIGluIEphdmFTY3JpcHQgYW5kIHdpbGwgYmUgcmVuYW1lZCB0byBwYl9uYW1lLlxuICogVG8gYWNjZXNzIGEgcmVzZXJ2ZWQgZmllbGQgdXNlLCBmb28ucGJfPG5hbWU+LCBlZywgZm9vLnBiX2RlZmF1bHQuXG4gKiBGb3IgdGhlIGxpc3Qgb2YgcmVzZXJ2ZWQgbmFtZXMgcGxlYXNlIHNlZTpcbiAqICAgICBjb20uZ29vZ2xlLmFwcHMuanNwYi5Kc0NsYXNzVGVtcGxhdGUuSlNfUkVTRVJWRURfV09SRFMuXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRfaW5jbHVkZUluc3RhbmNlIFdoZXRoZXIgdG8gaW5jbHVkZSB0aGUgSlNQQiBpbnN0YW5jZVxuICogICAgIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6IGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKi9cbnByb3RvLmRvbGl0dGxlLmV2ZW50cy5yZWxhdGl2aXR5LkNvbW1pdHRlZEV2ZW50U3RyZWFtV2l0aENvbnRleHQucHJvdG90eXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24ob3B0X2luY2x1ZGVJbnN0YW5jZSkge1xuICByZXR1cm4gcHJvdG8uZG9saXR0bGUuZXZlbnRzLnJlbGF0aXZpdHkuQ29tbWl0dGVkRXZlbnRTdHJlYW1XaXRoQ29udGV4dC50b09iamVjdChvcHRfaW5jbHVkZUluc3RhbmNlLCB0aGlzKTtcbn07XG5cblxuLyoqXG4gKiBTdGF0aWMgdmVyc2lvbiBvZiB0aGUge0BzZWUgdG9PYmplY3R9IG1ldGhvZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbnx1bmRlZmluZWR9IGluY2x1ZGVJbnN0YW5jZSBXaGV0aGVyIHRvIGluY2x1ZGUgdGhlIEpTUEJcbiAqICAgICBpbnN0YW5jZSBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OlxuICogICAgIGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEBwYXJhbSB7IXByb3RvLmRvbGl0dGxlLmV2ZW50cy5yZWxhdGl2aXR5LkNvbW1pdHRlZEV2ZW50U3RyZWFtV2l0aENvbnRleHR9IG1zZyBUaGUgbXNnIGluc3RhbmNlIHRvIHRyYW5zZm9ybS5cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLmRvbGl0dGxlLmV2ZW50cy5yZWxhdGl2aXR5LkNvbW1pdHRlZEV2ZW50U3RyZWFtV2l0aENvbnRleHQudG9PYmplY3QgPSBmdW5jdGlvbihpbmNsdWRlSW5zdGFuY2UsIG1zZykge1xuICB2YXIgZiwgb2JqID0ge1xuICAgIGNvbW1pdDogKGYgPSBtc2cuZ2V0Q29tbWl0KCkpICYmIEV2ZW50c19SZWxhdGl2aXR5X2ludGVyYWN0aW9uX2NvbW1pdHRlZF9ldmVudF9zdHJlYW1fcGIuQ29tbWl0dGVkRXZlbnRTdHJlYW0udG9PYmplY3QoaW5jbHVkZUluc3RhbmNlLCBmKSxcbiAgICBjb250ZXh0OiAoZiA9IG1zZy5nZXRDb250ZXh0KCkpICYmIEV2ZW50c19SZWxhdGl2aXR5X2ludGVyYWN0aW9uX2V4ZWN1dGlvbl9jb250ZXh0X3BiLkV4ZWN1dGlvbkNvbnRleHQudG9PYmplY3QoaW5jbHVkZUluc3RhbmNlLCBmKVxuICB9O1xuXG4gIGlmIChpbmNsdWRlSW5zdGFuY2UpIHtcbiAgICBvYmouJGpzcGJNZXNzYWdlSW5zdGFuY2UgPSBtc2c7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG59XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEBwYXJhbSB7anNwYi5CeXRlU291cmNlfSBieXRlcyBUaGUgYnl0ZXMgdG8gZGVzZXJpYWxpemUuXG4gKiBAcmV0dXJuIHshcHJvdG8uZG9saXR0bGUuZXZlbnRzLnJlbGF0aXZpdHkuQ29tbWl0dGVkRXZlbnRTdHJlYW1XaXRoQ29udGV4dH1cbiAqL1xucHJvdG8uZG9saXR0bGUuZXZlbnRzLnJlbGF0aXZpdHkuQ29tbWl0dGVkRXZlbnRTdHJlYW1XaXRoQ29udGV4dC5kZXNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gIHZhciByZWFkZXIgPSBuZXcganNwYi5CaW5hcnlSZWFkZXIoYnl0ZXMpO1xuICB2YXIgbXNnID0gbmV3IHByb3RvLmRvbGl0dGxlLmV2ZW50cy5yZWxhdGl2aXR5LkNvbW1pdHRlZEV2ZW50U3RyZWFtV2l0aENvbnRleHQ7XG4gIHJldHVybiBwcm90by5kb2xpdHRsZS5ldmVudHMucmVsYXRpdml0eS5Db21taXR0ZWRFdmVudFN0cmVhbVdpdGhDb250ZXh0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihtc2csIHJlYWRlcik7XG59O1xuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkgZnJvbSB0aGVcbiAqIGdpdmVuIHJlYWRlciBpbnRvIHRoZSBnaXZlbiBtZXNzYWdlIG9iamVjdC5cbiAqIEBwYXJhbSB7IXByb3RvLmRvbGl0dGxlLmV2ZW50cy5yZWxhdGl2aXR5LkNvbW1pdHRlZEV2ZW50U3RyZWFtV2l0aENvbnRleHR9IG1zZyBUaGUgbWVzc2FnZSBvYmplY3QgdG8gZGVzZXJpYWxpemUgaW50by5cbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5UmVhZGVyfSByZWFkZXIgVGhlIEJpbmFyeVJlYWRlciB0byB1c2UuXG4gKiBAcmV0dXJuIHshcHJvdG8uZG9saXR0bGUuZXZlbnRzLnJlbGF0aXZpdHkuQ29tbWl0dGVkRXZlbnRTdHJlYW1XaXRoQ29udGV4dH1cbiAqL1xucHJvdG8uZG9saXR0bGUuZXZlbnRzLnJlbGF0aXZpdHkuQ29tbWl0dGVkRXZlbnRTdHJlYW1XaXRoQ29udGV4dC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIgPSBmdW5jdGlvbihtc2csIHJlYWRlcikge1xuICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB2YXIgZmllbGQgPSByZWFkZXIuZ2V0RmllbGROdW1iZXIoKTtcbiAgICBzd2l0Y2ggKGZpZWxkKSB7XG4gICAgY2FzZSAxOlxuICAgICAgdmFyIHZhbHVlID0gbmV3IEV2ZW50c19SZWxhdGl2aXR5X2ludGVyYWN0aW9uX2NvbW1pdHRlZF9ldmVudF9zdHJlYW1fcGIuQ29tbWl0dGVkRXZlbnRTdHJlYW07XG4gICAgICByZWFkZXIucmVhZE1lc3NhZ2UodmFsdWUsRXZlbnRzX1JlbGF0aXZpdHlfaW50ZXJhY3Rpb25fY29tbWl0dGVkX2V2ZW50X3N0cmVhbV9wYi5Db21taXR0ZWRFdmVudFN0cmVhbS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIpO1xuICAgICAgbXNnLnNldENvbW1pdCh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICB2YXIgdmFsdWUgPSBuZXcgRXZlbnRzX1JlbGF0aXZpdHlfaW50ZXJhY3Rpb25fZXhlY3V0aW9uX2NvbnRleHRfcGIuRXhlY3V0aW9uQ29udGV4dDtcbiAgICAgIHJlYWRlci5yZWFkTWVzc2FnZSh2YWx1ZSxFdmVudHNfUmVsYXRpdml0eV9pbnRlcmFjdGlvbl9leGVjdXRpb25fY29udGV4dF9wYi5FeGVjdXRpb25Db250ZXh0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcik7XG4gICAgICBtc2cuc2V0Q29udGV4dCh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBtc2c7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gKi9cbnByb3RvLmRvbGl0dGxlLmV2ZW50cy5yZWxhdGl2aXR5LkNvbW1pdHRlZEV2ZW50U3RyZWFtV2l0aENvbnRleHQucHJvdG90eXBlLnNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgd3JpdGVyID0gbmV3IGpzcGIuQmluYXJ5V3JpdGVyKCk7XG4gIHByb3RvLmRvbGl0dGxlLmV2ZW50cy5yZWxhdGl2aXR5LkNvbW1pdHRlZEV2ZW50U3RyZWFtV2l0aENvbnRleHQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBnaXZlbiBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlXG4gKiBmb3JtYXQpLCB3cml0aW5nIHRvIHRoZSBnaXZlbiBCaW5hcnlXcml0ZXIuXG4gKiBAcGFyYW0geyFwcm90by5kb2xpdHRsZS5ldmVudHMucmVsYXRpdml0eS5Db21taXR0ZWRFdmVudFN0cmVhbVdpdGhDb250ZXh0fSBtZXNzYWdlXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVdyaXRlcn0gd3JpdGVyXG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLmRvbGl0dGxlLmV2ZW50cy5yZWxhdGl2aXR5LkNvbW1pdHRlZEV2ZW50U3RyZWFtV2l0aENvbnRleHQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIgPSBmdW5jdGlvbihtZXNzYWdlLCB3cml0ZXIpIHtcbiAgdmFyIGYgPSB1bmRlZmluZWQ7XG4gIGYgPSBtZXNzYWdlLmdldENvbW1pdCgpO1xuICBpZiAoZiAhPSBudWxsKSB7XG4gICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgIDEsXG4gICAgICBmLFxuICAgICAgRXZlbnRzX1JlbGF0aXZpdHlfaW50ZXJhY3Rpb25fY29tbWl0dGVkX2V2ZW50X3N0cmVhbV9wYi5Db21taXR0ZWRFdmVudFN0cmVhbS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0Q29udGV4dCgpO1xuICBpZiAoZiAhPSBudWxsKSB7XG4gICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgIDIsXG4gICAgICBmLFxuICAgICAgRXZlbnRzX1JlbGF0aXZpdHlfaW50ZXJhY3Rpb25fZXhlY3V0aW9uX2NvbnRleHRfcGIuRXhlY3V0aW9uQ29udGV4dC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBDb21taXR0ZWRFdmVudFN0cmVhbSBjb21taXQgPSAxO1xuICogQHJldHVybiB7P3Byb3RvLmRvbGl0dGxlLmV2ZW50cy5yZWxhdGl2aXR5LkNvbW1pdHRlZEV2ZW50U3RyZWFtfVxuICovXG5wcm90by5kb2xpdHRsZS5ldmVudHMucmVsYXRpdml0eS5Db21taXR0ZWRFdmVudFN0cmVhbVdpdGhDb250ZXh0LnByb3RvdHlwZS5nZXRDb21taXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZXs/cHJvdG8uZG9saXR0bGUuZXZlbnRzLnJlbGF0aXZpdHkuQ29tbWl0dGVkRXZlbnRTdHJlYW19ICovIChcbiAgICBqc3BiLk1lc3NhZ2UuZ2V0V3JhcHBlckZpZWxkKHRoaXMsIEV2ZW50c19SZWxhdGl2aXR5X2ludGVyYWN0aW9uX2NvbW1pdHRlZF9ldmVudF9zdHJlYW1fcGIuQ29tbWl0dGVkRXZlbnRTdHJlYW0sIDEpKTtcbn07XG5cblxuLyoqIEBwYXJhbSB7P3Byb3RvLmRvbGl0dGxlLmV2ZW50cy5yZWxhdGl2aXR5LkNvbW1pdHRlZEV2ZW50U3RyZWFtfHVuZGVmaW5lZH0gdmFsdWUgKi9cbnByb3RvLmRvbGl0dGxlLmV2ZW50cy5yZWxhdGl2aXR5LkNvbW1pdHRlZEV2ZW50U3RyZWFtV2l0aENvbnRleHQucHJvdG90eXBlLnNldENvbW1pdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGpzcGIuTWVzc2FnZS5zZXRXcmFwcGVyRmllbGQodGhpcywgMSwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIENsZWFycyB0aGUgbWVzc2FnZSBmaWVsZCBtYWtpbmcgaXQgdW5kZWZpbmVkLlxuICovXG5wcm90by5kb2xpdHRsZS5ldmVudHMucmVsYXRpdml0eS5Db21taXR0ZWRFdmVudFN0cmVhbVdpdGhDb250ZXh0LnByb3RvdHlwZS5jbGVhckNvbW1pdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNldENvbW1pdCh1bmRlZmluZWQpO1xufTtcblxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciB0aGlzIGZpZWxkIGlzIHNldC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbnByb3RvLmRvbGl0dGxlLmV2ZW50cy5yZWxhdGl2aXR5LkNvbW1pdHRlZEV2ZW50U3RyZWFtV2l0aENvbnRleHQucHJvdG90eXBlLmhhc0NvbW1pdCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLmdldEZpZWxkKHRoaXMsIDEpICE9IG51bGw7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgRXhlY3V0aW9uQ29udGV4dCBjb250ZXh0ID0gMjtcbiAqIEByZXR1cm4gez9wcm90by5kb2xpdHRsZS5ldmVudHMucmVsYXRpdml0eS5FeGVjdXRpb25Db250ZXh0fVxuICovXG5wcm90by5kb2xpdHRsZS5ldmVudHMucmVsYXRpdml0eS5Db21taXR0ZWRFdmVudFN0cmVhbVdpdGhDb250ZXh0LnByb3RvdHlwZS5nZXRDb250ZXh0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGV7P3Byb3RvLmRvbGl0dGxlLmV2ZW50cy5yZWxhdGl2aXR5LkV4ZWN1dGlvbkNvbnRleHR9ICovIChcbiAgICBqc3BiLk1lc3NhZ2UuZ2V0V3JhcHBlckZpZWxkKHRoaXMsIEV2ZW50c19SZWxhdGl2aXR5X2ludGVyYWN0aW9uX2V4ZWN1dGlvbl9jb250ZXh0X3BiLkV4ZWN1dGlvbkNvbnRleHQsIDIpKTtcbn07XG5cblxuLyoqIEBwYXJhbSB7P3Byb3RvLmRvbGl0dGxlLmV2ZW50cy5yZWxhdGl2aXR5LkV4ZWN1dGlvbkNvbnRleHR8dW5kZWZpbmVkfSB2YWx1ZSAqL1xucHJvdG8uZG9saXR0bGUuZXZlbnRzLnJlbGF0aXZpdHkuQ29tbWl0dGVkRXZlbnRTdHJlYW1XaXRoQ29udGV4dC5wcm90b3R5cGUuc2V0Q29udGV4dCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGpzcGIuTWVzc2FnZS5zZXRXcmFwcGVyRmllbGQodGhpcywgMiwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIENsZWFycyB0aGUgbWVzc2FnZSBmaWVsZCBtYWtpbmcgaXQgdW5kZWZpbmVkLlxuICovXG5wcm90by5kb2xpdHRsZS5ldmVudHMucmVsYXRpdml0eS5Db21taXR0ZWRFdmVudFN0cmVhbVdpdGhDb250ZXh0LnByb3RvdHlwZS5jbGVhckNvbnRleHQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zZXRDb250ZXh0KHVuZGVmaW5lZCk7XG59O1xuXG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIHRoaXMgZmllbGQgaXMgc2V0LlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xucHJvdG8uZG9saXR0bGUuZXZlbnRzLnJlbGF0aXZpdHkuQ29tbWl0dGVkRXZlbnRTdHJlYW1XaXRoQ29udGV4dC5wcm90b3R5cGUuaGFzQ29udGV4dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLmdldEZpZWxkKHRoaXMsIDIpICE9IG51bGw7XG59O1xuXG5cbmdvb2cub2JqZWN0LmV4dGVuZChleHBvcnRzLCBwcm90by5kb2xpdHRsZS5ldmVudHMucmVsYXRpdml0eSk7XG4iXX0=