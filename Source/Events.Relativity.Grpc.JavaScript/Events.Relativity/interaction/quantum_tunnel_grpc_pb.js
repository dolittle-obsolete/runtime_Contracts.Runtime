// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// ---------------------------------------------------------------------------------------------
//  Copyright (c) Dolittle. All rights reserved.
//  Licensed under the MIT License. See LICENSE in the project root for license information.
// --------------------------------------------------------------------------------------------
//
'use strict';
var grpc = require('grpc');
var Events_Relativity_interaction_open_tunnel_pb = require('../../Events.Relativity/interaction/open_tunnel_pb.js');
var Events_Relativity_interaction_committed_event_stream_with_context_pb = require('../../Events.Relativity/interaction/committed_event_stream_with_context_pb.js');

function serialize_dolittle_events_relativity_CommittedEventStreamWithContext(arg) {
  if (!(arg instanceof Events_Relativity_interaction_committed_event_stream_with_context_pb.CommittedEventStreamWithContext)) {
    throw new Error('Expected argument of type dolittle.events.relativity.CommittedEventStreamWithContext');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dolittle_events_relativity_CommittedEventStreamWithContext(buffer_arg) {
  return Events_Relativity_interaction_committed_event_stream_with_context_pb.CommittedEventStreamWithContext.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dolittle_events_relativity_OpenTunnel(arg) {
  if (!(arg instanceof Events_Relativity_interaction_open_tunnel_pb.OpenTunnel)) {
    throw new Error('Expected argument of type dolittle.events.relativity.OpenTunnel');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dolittle_events_relativity_OpenTunnel(buffer_arg) {
  return Events_Relativity_interaction_open_tunnel_pb.OpenTunnel.deserializeBinary(new Uint8Array(buffer_arg));
}


// Represents the service for working with quantum tunnel
var QuantumTunnelServiceService = exports.QuantumTunnelServiceService = {
  open: {
    path: '/dolittle.events.relativity.QuantumTunnelService/Open',
    requestStream: false,
    responseStream: true,
    requestType: Events_Relativity_interaction_open_tunnel_pb.OpenTunnel,
    responseType: Events_Relativity_interaction_committed_event_stream_with_context_pb.CommittedEventStreamWithContext,
    requestSerialize: serialize_dolittle_events_relativity_OpenTunnel,
    requestDeserialize: deserialize_dolittle_events_relativity_OpenTunnel,
    responseSerialize: serialize_dolittle_events_relativity_CommittedEventStreamWithContext,
    responseDeserialize: deserialize_dolittle_events_relativity_CommittedEventStreamWithContext,
  },
};

exports.QuantumTunnelServiceClient = grpc.makeGenericClientConstructor(QuantumTunnelServiceService);
