// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// ---------------------------------------------------------------------------------------------
//  Copyright (c) Dolittle. All rights reserved.
//  Licensed under the MIT License. See LICENSE in the project root for license information.
// --------------------------------------------------------------------------------------------
'use strict';
var grpc = require('grpc');
var Application_management_clients_pb = require('../../Application/management/clients_pb.js');
var Application_client_info_pb = require('../../Application/client_info_pb.js');

function serialize_dolittle_runtime_application_management_ConnectedClientsRequest(arg) {
  if (!(arg instanceof Application_management_clients_pb.ConnectedClientsRequest)) {
    throw new Error('Expected argument of type dolittle.runtime.application.management.ConnectedClientsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dolittle_runtime_application_management_ConnectedClientsRequest(buffer_arg) {
  return Application_management_clients_pb.ConnectedClientsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dolittle_runtime_application_management_ConnectedClientsResponse(arg) {
  if (!(arg instanceof Application_management_clients_pb.ConnectedClientsResponse)) {
    throw new Error('Expected argument of type dolittle.runtime.application.management.ConnectedClientsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dolittle_runtime_application_management_ConnectedClientsResponse(buffer_arg) {
  return Application_management_clients_pb.ConnectedClientsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Represents the Client service
var ClientsService = exports.ClientsService = {
  getConnectedClients: {
    path: '/dolittle.runtime.application.management.Clients/GetConnectedClients',
    requestStream: false,
    responseStream: false,
    requestType: Application_management_clients_pb.ConnectedClientsRequest,
    responseType: Application_management_clients_pb.ConnectedClientsResponse,
    requestSerialize: serialize_dolittle_runtime_application_management_ConnectedClientsRequest,
    requestDeserialize: deserialize_dolittle_runtime_application_management_ConnectedClientsRequest,
    responseSerialize: serialize_dolittle_runtime_application_management_ConnectedClientsResponse,
    responseDeserialize: deserialize_dolittle_runtime_application_management_ConnectedClientsResponse,
  },
};

exports.ClientsClient = grpc.makeGenericClientConstructor(ClientsService);
