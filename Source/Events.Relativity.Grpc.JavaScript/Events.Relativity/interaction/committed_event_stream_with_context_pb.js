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
proto.dolittle.events.relativity.CommittedEventStreamWithContext = function(opt_data) {
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
proto.dolittle.events.relativity.CommittedEventStreamWithContext.prototype.toObject = function(opt_includeInstance) {
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
proto.dolittle.events.relativity.CommittedEventStreamWithContext.toObject = function(includeInstance, msg) {
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
proto.dolittle.events.relativity.CommittedEventStreamWithContext.deserializeBinary = function(bytes) {
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
proto.dolittle.events.relativity.CommittedEventStreamWithContext.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Events_Relativity_interaction_committed_event_stream_pb.CommittedEventStream;
      reader.readMessage(value,Events_Relativity_interaction_committed_event_stream_pb.CommittedEventStream.deserializeBinaryFromReader);
      msg.setCommit(value);
      break;
    case 2:
      var value = new Events_Relativity_interaction_execution_context_pb.ExecutionContext;
      reader.readMessage(value,Events_Relativity_interaction_execution_context_pb.ExecutionContext.deserializeBinaryFromReader);
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
proto.dolittle.events.relativity.CommittedEventStreamWithContext.prototype.serializeBinary = function() {
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
proto.dolittle.events.relativity.CommittedEventStreamWithContext.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommit();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Events_Relativity_interaction_committed_event_stream_pb.CommittedEventStream.serializeBinaryToWriter
    );
  }
  f = message.getContext();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      Events_Relativity_interaction_execution_context_pb.ExecutionContext.serializeBinaryToWriter
    );
  }
};


/**
 * optional CommittedEventStream commit = 1;
 * @return {?proto.dolittle.events.relativity.CommittedEventStream}
 */
proto.dolittle.events.relativity.CommittedEventStreamWithContext.prototype.getCommit = function() {
  return /** @type{?proto.dolittle.events.relativity.CommittedEventStream} */ (
    jspb.Message.getWrapperField(this, Events_Relativity_interaction_committed_event_stream_pb.CommittedEventStream, 1));
};


/** @param {?proto.dolittle.events.relativity.CommittedEventStream|undefined} value */
proto.dolittle.events.relativity.CommittedEventStreamWithContext.prototype.setCommit = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.dolittle.events.relativity.CommittedEventStreamWithContext.prototype.clearCommit = function() {
  this.setCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dolittle.events.relativity.CommittedEventStreamWithContext.prototype.hasCommit = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ExecutionContext context = 2;
 * @return {?proto.dolittle.events.relativity.ExecutionContext}
 */
proto.dolittle.events.relativity.CommittedEventStreamWithContext.prototype.getContext = function() {
  return /** @type{?proto.dolittle.events.relativity.ExecutionContext} */ (
    jspb.Message.getWrapperField(this, Events_Relativity_interaction_execution_context_pb.ExecutionContext, 2));
};


/** @param {?proto.dolittle.events.relativity.ExecutionContext|undefined} value */
proto.dolittle.events.relativity.CommittedEventStreamWithContext.prototype.setContext = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.dolittle.events.relativity.CommittedEventStreamWithContext.prototype.clearContext = function() {
  this.setContext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dolittle.events.relativity.CommittedEventStreamWithContext.prototype.hasContext = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.dolittle.events.relativity);
