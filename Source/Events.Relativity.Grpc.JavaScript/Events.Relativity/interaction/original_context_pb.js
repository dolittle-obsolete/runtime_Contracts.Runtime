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

var system_guid_pb = require('../../system/guid_pb.js');
goog.object.extend(proto, system_guid_pb);
var Events_Relativity_interaction_claim_pb = require('../../Events.Relativity/interaction/claim_pb.js');
goog.object.extend(proto, Events_Relativity_interaction_claim_pb);
goog.exportSymbol('proto.dolittle.events.relativity.OriginalContext', null, global);
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
proto.dolittle.events.relativity.OriginalContext = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dolittle.events.relativity.OriginalContext.repeatedFields_, null);
};
goog.inherits(proto.dolittle.events.relativity.OriginalContext, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dolittle.events.relativity.OriginalContext.displayName = 'proto.dolittle.events.relativity.OriginalContext';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dolittle.events.relativity.OriginalContext.repeatedFields_ = [5];



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
proto.dolittle.events.relativity.OriginalContext.prototype.toObject = function(opt_includeInstance) {
  return proto.dolittle.events.relativity.OriginalContext.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dolittle.events.relativity.OriginalContext} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dolittle.events.relativity.OriginalContext.toObject = function(includeInstance, msg) {
  var f, obj = {
    application: (f = msg.getApplication()) && system_guid_pb.guid.toObject(includeInstance, f),
    boundedcontext: (f = msg.getBoundedcontext()) && system_guid_pb.guid.toObject(includeInstance, f),
    tenant: (f = msg.getTenant()) && system_guid_pb.guid.toObject(includeInstance, f),
    environment: jspb.Message.getFieldWithDefault(msg, 4, ""),
    claimsList: jspb.Message.toObjectList(msg.getClaimsList(),
    Events_Relativity_interaction_claim_pb.Claim.toObject, includeInstance),
    commitinorigin: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.dolittle.events.relativity.OriginalContext}
 */
proto.dolittle.events.relativity.OriginalContext.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dolittle.events.relativity.OriginalContext;
  return proto.dolittle.events.relativity.OriginalContext.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dolittle.events.relativity.OriginalContext} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dolittle.events.relativity.OriginalContext}
 */
proto.dolittle.events.relativity.OriginalContext.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new system_guid_pb.guid;
      reader.readMessage(value,system_guid_pb.guid.deserializeBinaryFromReader);
      msg.setApplication(value);
      break;
    case 2:
      var value = new system_guid_pb.guid;
      reader.readMessage(value,system_guid_pb.guid.deserializeBinaryFromReader);
      msg.setBoundedcontext(value);
      break;
    case 3:
      var value = new system_guid_pb.guid;
      reader.readMessage(value,system_guid_pb.guid.deserializeBinaryFromReader);
      msg.setTenant(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnvironment(value);
      break;
    case 5:
      var value = new Events_Relativity_interaction_claim_pb.Claim;
      reader.readMessage(value,Events_Relativity_interaction_claim_pb.Claim.deserializeBinaryFromReader);
      msg.addClaims(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCommitinorigin(value);
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
proto.dolittle.events.relativity.OriginalContext.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dolittle.events.relativity.OriginalContext.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dolittle.events.relativity.OriginalContext} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dolittle.events.relativity.OriginalContext.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApplication();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      system_guid_pb.guid.serializeBinaryToWriter
    );
  }
  f = message.getBoundedcontext();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      system_guid_pb.guid.serializeBinaryToWriter
    );
  }
  f = message.getTenant();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      system_guid_pb.guid.serializeBinaryToWriter
    );
  }
  f = message.getEnvironment();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getClaimsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      Events_Relativity_interaction_claim_pb.Claim.serializeBinaryToWriter
    );
  }
  f = message.getCommitinorigin();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
};


/**
 * optional dolittle.guid application = 1;
 * @return {?proto.dolittle.guid}
 */
proto.dolittle.events.relativity.OriginalContext.prototype.getApplication = function() {
  return /** @type{?proto.dolittle.guid} */ (
    jspb.Message.getWrapperField(this, system_guid_pb.guid, 1));
};


/** @param {?proto.dolittle.guid|undefined} value */
proto.dolittle.events.relativity.OriginalContext.prototype.setApplication = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.dolittle.events.relativity.OriginalContext.prototype.clearApplication = function() {
  this.setApplication(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dolittle.events.relativity.OriginalContext.prototype.hasApplication = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional dolittle.guid boundedContext = 2;
 * @return {?proto.dolittle.guid}
 */
proto.dolittle.events.relativity.OriginalContext.prototype.getBoundedcontext = function() {
  return /** @type{?proto.dolittle.guid} */ (
    jspb.Message.getWrapperField(this, system_guid_pb.guid, 2));
};


/** @param {?proto.dolittle.guid|undefined} value */
proto.dolittle.events.relativity.OriginalContext.prototype.setBoundedcontext = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.dolittle.events.relativity.OriginalContext.prototype.clearBoundedcontext = function() {
  this.setBoundedcontext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dolittle.events.relativity.OriginalContext.prototype.hasBoundedcontext = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional dolittle.guid tenant = 3;
 * @return {?proto.dolittle.guid}
 */
proto.dolittle.events.relativity.OriginalContext.prototype.getTenant = function() {
  return /** @type{?proto.dolittle.guid} */ (
    jspb.Message.getWrapperField(this, system_guid_pb.guid, 3));
};


/** @param {?proto.dolittle.guid|undefined} value */
proto.dolittle.events.relativity.OriginalContext.prototype.setTenant = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.dolittle.events.relativity.OriginalContext.prototype.clearTenant = function() {
  this.setTenant(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dolittle.events.relativity.OriginalContext.prototype.hasTenant = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string environment = 4;
 * @return {string}
 */
proto.dolittle.events.relativity.OriginalContext.prototype.getEnvironment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.dolittle.events.relativity.OriginalContext.prototype.setEnvironment = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated Claim claims = 5;
 * @return {!Array<!proto.dolittle.events.relativity.Claim>}
 */
proto.dolittle.events.relativity.OriginalContext.prototype.getClaimsList = function() {
  return /** @type{!Array<!proto.dolittle.events.relativity.Claim>} */ (
    jspb.Message.getRepeatedWrapperField(this, Events_Relativity_interaction_claim_pb.Claim, 5));
};


/** @param {!Array<!proto.dolittle.events.relativity.Claim>} value */
proto.dolittle.events.relativity.OriginalContext.prototype.setClaimsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.dolittle.events.relativity.Claim=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dolittle.events.relativity.Claim}
 */
proto.dolittle.events.relativity.OriginalContext.prototype.addClaims = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.dolittle.events.relativity.Claim, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.dolittle.events.relativity.OriginalContext.prototype.clearClaimsList = function() {
  this.setClaimsList([]);
};


/**
 * optional uint64 commitInOrigin = 6;
 * @return {number}
 */
proto.dolittle.events.relativity.OriginalContext.prototype.getCommitinorigin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.dolittle.events.relativity.OriginalContext.prototype.setCommitinorigin = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


goog.object.extend(exports, proto.dolittle.events.relativity);
