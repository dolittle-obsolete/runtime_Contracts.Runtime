// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// ---------------------------------------------------------------------------------------------
//  Copyright (c) Dolittle. All rights reserved.
//  Licensed under the MIT License. See LICENSE in the project root for license information.
// --------------------------------------------------------------------------------------------
'use strict';
var grpc = require('grpc');
var Application_server_clients_pb = require('../../Application/server/clients_pb.js');
var Application_client_info_pb = require('../../Application/client_info_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_dolittle_runtime_application_ClientInfo(arg) {
  if (!(arg instanceof Application_client_info_pb.ClientInfo)) {
    throw new Error('Expected argument of type dolittle.runtime.application.ClientInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dolittle_runtime_application_ClientInfo(buffer_arg) {
  return Application_client_info_pb.ClientInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


// Represents the Client service
var ClientsService = exports.ClientsService = {
  connect: {
    path: '/dolittle.runtime.application.server.Clients/Connect',
    requestStream: false,
    responseStream: true,
    requestType: Application_client_info_pb.ClientInfo,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dolittle_runtime_application_ClientInfo,
    requestDeserialize: deserialize_dolittle_runtime_application_ClientInfo,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.ClientsClient = grpc.makeGenericClientConstructor(ClientsService);
