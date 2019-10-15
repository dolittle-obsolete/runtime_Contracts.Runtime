// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: Events.Relativity/Microservice/event_metadata.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Dolittle.Events.Relativity.Microservice {

  /// <summary>Holder for reflection information generated from Events.Relativity/Microservice/event_metadata.proto</summary>
  public static partial class EventMetadataReflection {

    #region Descriptor
    /// <summary>File descriptor for Events.Relativity/Microservice/event_metadata.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static EventMetadataReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "CjNFdmVudHMuUmVsYXRpdml0eS9NaWNyb3NlcnZpY2UvZXZlbnRfbWV0YWRh",
            "dGEucHJvdG8SJ2RvbGl0dGxlLmV2ZW50cy5yZWxhdGl2aXR5Lm1pY3Jvc2Vy",
            "dmljZRoRc3lzdGVtL2d1aWQucHJvdG8aLUV2ZW50cy5SZWxhdGl2aXR5L01p",
            "Y3Jvc2VydmljZS9hcnRpZmFjdC5wcm90bxo7RXZlbnRzLlJlbGF0aXZpdHkv",
            "TWljcm9zZXJ2aWNlL3ZlcnNpb25lZF9ldmVudF9zb3VyY2UucHJvdG8aNUV2",
            "ZW50cy5SZWxhdGl2aXR5L01pY3Jvc2VydmljZS9vcmlnaW5hbF9jb250ZXh0",
            "LnByb3RvItACCg1FdmVudE1ldGFkYXRhEh8KB2V2ZW50SWQYASABKAsyDi5k",
            "b2xpdHRsZS5ndWlkEk0KBnNvdXJjZRgCIAEoCzI9LmRvbGl0dGxlLmV2ZW50",
            "cy5yZWxhdGl2aXR5Lm1pY3Jvc2VydmljZS5WZXJzaW9uZWRFdmVudFNvdXJj",
            "ZRIlCg1jb3JyZWxhdGlvbklkGAMgASgLMg4uZG9saXR0bGUuZ3VpZBJDCghh",
            "cnRpZmFjdBgEIAEoCzIxLmRvbGl0dGxlLmV2ZW50cy5yZWxhdGl2aXR5Lm1p",
            "Y3Jvc2VydmljZS5BcnRpZmFjdBIQCghvY2N1cnJlZBgFIAEoAxJRCg9vcmln",
            "aW5hbENvbnRleHQYBiABKAsyOC5kb2xpdHRsZS5ldmVudHMucmVsYXRpdml0",
            "eS5taWNyb3NlcnZpY2UuT3JpZ2luYWxDb250ZXh0QiqqAidEb2xpdHRsZS5F",
            "dmVudHMuUmVsYXRpdml0eS5NaWNyb3NlcnZpY2ViBnByb3RvMw=="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::System.Protobuf.GuidReflection.Descriptor, global::Dolittle.Events.Relativity.Microservice.ArtifactReflection.Descriptor, global::Dolittle.Events.Relativity.Microservice.VersionedEventSourceReflection.Descriptor, global::Dolittle.Events.Relativity.Microservice.OriginalContextReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Dolittle.Events.Relativity.Microservice.EventMetadata), global::Dolittle.Events.Relativity.Microservice.EventMetadata.Parser, new[]{ "EventId", "Source", "CorrelationId", "Artifact", "Occurred", "OriginalContext" }, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  /// <summary>
  /// Represents the metadata related to an event
  /// </summary>
  public sealed partial class EventMetadata : pb::IMessage<EventMetadata> {
    private static readonly pb::MessageParser<EventMetadata> _parser = new pb::MessageParser<EventMetadata>(() => new EventMetadata());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<EventMetadata> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Dolittle.Events.Relativity.Microservice.EventMetadataReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public EventMetadata() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public EventMetadata(EventMetadata other) : this() {
      eventId_ = other.eventId_ != null ? other.eventId_.Clone() : null;
      source_ = other.source_ != null ? other.source_.Clone() : null;
      correlationId_ = other.correlationId_ != null ? other.correlationId_.Clone() : null;
      artifact_ = other.artifact_ != null ? other.artifact_.Clone() : null;
      occurred_ = other.occurred_;
      originalContext_ = other.originalContext_ != null ? other.originalContext_.Clone() : null;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public EventMetadata Clone() {
      return new EventMetadata(this);
    }

    /// <summary>Field number for the "eventId" field.</summary>
    public const int EventIdFieldNumber = 1;
    private global::System.Protobuf.guid eventId_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::System.Protobuf.guid EventId {
      get { return eventId_; }
      set {
        eventId_ = value;
      }
    }

    /// <summary>Field number for the "source" field.</summary>
    public const int SourceFieldNumber = 2;
    private global::Dolittle.Events.Relativity.Microservice.VersionedEventSource source_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Dolittle.Events.Relativity.Microservice.VersionedEventSource Source {
      get { return source_; }
      set {
        source_ = value;
      }
    }

    /// <summary>Field number for the "correlationId" field.</summary>
    public const int CorrelationIdFieldNumber = 3;
    private global::System.Protobuf.guid correlationId_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::System.Protobuf.guid CorrelationId {
      get { return correlationId_; }
      set {
        correlationId_ = value;
      }
    }

    /// <summary>Field number for the "artifact" field.</summary>
    public const int ArtifactFieldNumber = 4;
    private global::Dolittle.Events.Relativity.Microservice.Artifact artifact_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Dolittle.Events.Relativity.Microservice.Artifact Artifact {
      get { return artifact_; }
      set {
        artifact_ = value;
      }
    }

    /// <summary>Field number for the "occurred" field.</summary>
    public const int OccurredFieldNumber = 5;
    private long occurred_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public long Occurred {
      get { return occurred_; }
      set {
        occurred_ = value;
      }
    }

    /// <summary>Field number for the "originalContext" field.</summary>
    public const int OriginalContextFieldNumber = 6;
    private global::Dolittle.Events.Relativity.Microservice.OriginalContext originalContext_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Dolittle.Events.Relativity.Microservice.OriginalContext OriginalContext {
      get { return originalContext_; }
      set {
        originalContext_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as EventMetadata);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(EventMetadata other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (!object.Equals(EventId, other.EventId)) return false;
      if (!object.Equals(Source, other.Source)) return false;
      if (!object.Equals(CorrelationId, other.CorrelationId)) return false;
      if (!object.Equals(Artifact, other.Artifact)) return false;
      if (Occurred != other.Occurred) return false;
      if (!object.Equals(OriginalContext, other.OriginalContext)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (eventId_ != null) hash ^= EventId.GetHashCode();
      if (source_ != null) hash ^= Source.GetHashCode();
      if (correlationId_ != null) hash ^= CorrelationId.GetHashCode();
      if (artifact_ != null) hash ^= Artifact.GetHashCode();
      if (Occurred != 0L) hash ^= Occurred.GetHashCode();
      if (originalContext_ != null) hash ^= OriginalContext.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void WriteTo(pb::CodedOutputStream output) {
      if (eventId_ != null) {
        output.WriteRawTag(10);
        output.WriteMessage(EventId);
      }
      if (source_ != null) {
        output.WriteRawTag(18);
        output.WriteMessage(Source);
      }
      if (correlationId_ != null) {
        output.WriteRawTag(26);
        output.WriteMessage(CorrelationId);
      }
      if (artifact_ != null) {
        output.WriteRawTag(34);
        output.WriteMessage(Artifact);
      }
      if (Occurred != 0L) {
        output.WriteRawTag(40);
        output.WriteInt64(Occurred);
      }
      if (originalContext_ != null) {
        output.WriteRawTag(50);
        output.WriteMessage(OriginalContext);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (eventId_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(EventId);
      }
      if (source_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Source);
      }
      if (correlationId_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(CorrelationId);
      }
      if (artifact_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Artifact);
      }
      if (Occurred != 0L) {
        size += 1 + pb::CodedOutputStream.ComputeInt64Size(Occurred);
      }
      if (originalContext_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(OriginalContext);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(EventMetadata other) {
      if (other == null) {
        return;
      }
      if (other.eventId_ != null) {
        if (eventId_ == null) {
          EventId = new global::System.Protobuf.guid();
        }
        EventId.MergeFrom(other.EventId);
      }
      if (other.source_ != null) {
        if (source_ == null) {
          Source = new global::Dolittle.Events.Relativity.Microservice.VersionedEventSource();
        }
        Source.MergeFrom(other.Source);
      }
      if (other.correlationId_ != null) {
        if (correlationId_ == null) {
          CorrelationId = new global::System.Protobuf.guid();
        }
        CorrelationId.MergeFrom(other.CorrelationId);
      }
      if (other.artifact_ != null) {
        if (artifact_ == null) {
          Artifact = new global::Dolittle.Events.Relativity.Microservice.Artifact();
        }
        Artifact.MergeFrom(other.Artifact);
      }
      if (other.Occurred != 0L) {
        Occurred = other.Occurred;
      }
      if (other.originalContext_ != null) {
        if (originalContext_ == null) {
          OriginalContext = new global::Dolittle.Events.Relativity.Microservice.OriginalContext();
        }
        OriginalContext.MergeFrom(other.OriginalContext);
      }
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(pb::CodedInputStream input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 10: {
            if (eventId_ == null) {
              EventId = new global::System.Protobuf.guid();
            }
            input.ReadMessage(EventId);
            break;
          }
          case 18: {
            if (source_ == null) {
              Source = new global::Dolittle.Events.Relativity.Microservice.VersionedEventSource();
            }
            input.ReadMessage(Source);
            break;
          }
          case 26: {
            if (correlationId_ == null) {
              CorrelationId = new global::System.Protobuf.guid();
            }
            input.ReadMessage(CorrelationId);
            break;
          }
          case 34: {
            if (artifact_ == null) {
              Artifact = new global::Dolittle.Events.Relativity.Microservice.Artifact();
            }
            input.ReadMessage(Artifact);
            break;
          }
          case 40: {
            Occurred = input.ReadInt64();
            break;
          }
          case 50: {
            if (originalContext_ == null) {
              OriginalContext = new global::Dolittle.Events.Relativity.Microservice.OriginalContext();
            }
            input.ReadMessage(OriginalContext);
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code
