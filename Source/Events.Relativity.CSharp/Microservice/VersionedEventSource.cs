// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: Events.Relativity/Microservice/versioned_event_source.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Dolittle.Events.Relativity.Microservice {

  /// <summary>Holder for reflection information generated from Events.Relativity/Microservice/versioned_event_source.proto</summary>
  public static partial class VersionedEventSourceReflection {

    #region Descriptor
    /// <summary>File descriptor for Events.Relativity/Microservice/versioned_event_source.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static VersionedEventSourceReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "CjtFdmVudHMuUmVsYXRpdml0eS9NaWNyb3NlcnZpY2UvdmVyc2lvbmVkX2V2",
            "ZW50X3NvdXJjZS5wcm90bxInZG9saXR0bGUuZXZlbnRzLnJlbGF0aXZpdHku",
            "bWljcm9zZXJ2aWNlGhFzeXN0ZW0vZ3VpZC5wcm90bxo5RXZlbnRzLlJlbGF0",
            "aXZpdHkvTWljcm9zZXJ2aWNlL2V2ZW50X3NvdXJjZV92ZXJzaW9uLnByb3Rv",
            "IqsBChRWZXJzaW9uZWRFdmVudFNvdXJjZRJMCgd2ZXJzaW9uGAEgASgLMjsu",
            "ZG9saXR0bGUuZXZlbnRzLnJlbGF0aXZpdHkubWljcm9zZXJ2aWNlLkV2ZW50",
            "U291cmNlVmVyc2lvbhIjCgtldmVudFNvdXJjZRgCIAEoCzIOLmRvbGl0dGxl",
            "Lmd1aWQSIAoIYXJ0aWZhY3QYAyABKAsyDi5kb2xpdHRsZS5ndWlkQiqqAidE",
            "b2xpdHRsZS5FdmVudHMuUmVsYXRpdml0eS5NaWNyb3NlcnZpY2ViBnByb3Rv",
            "Mw=="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::System.Protobuf.GuidReflection.Descriptor, global::Dolittle.Events.Relativity.Microservice.EventSourceVersionReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Dolittle.Events.Relativity.Microservice.VersionedEventSource), global::Dolittle.Events.Relativity.Microservice.VersionedEventSource.Parser, new[]{ "Version", "EventSource", "Artifact" }, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  /// <summary>
  /// Represents a versioned event source
  /// </summary>
  public sealed partial class VersionedEventSource : pb::IMessage<VersionedEventSource> {
    private static readonly pb::MessageParser<VersionedEventSource> _parser = new pb::MessageParser<VersionedEventSource>(() => new VersionedEventSource());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<VersionedEventSource> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Dolittle.Events.Relativity.Microservice.VersionedEventSourceReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public VersionedEventSource() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public VersionedEventSource(VersionedEventSource other) : this() {
      version_ = other.version_ != null ? other.version_.Clone() : null;
      eventSource_ = other.eventSource_ != null ? other.eventSource_.Clone() : null;
      artifact_ = other.artifact_ != null ? other.artifact_.Clone() : null;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public VersionedEventSource Clone() {
      return new VersionedEventSource(this);
    }

    /// <summary>Field number for the "version" field.</summary>
    public const int VersionFieldNumber = 1;
    private global::Dolittle.Events.Relativity.Microservice.EventSourceVersion version_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Dolittle.Events.Relativity.Microservice.EventSourceVersion Version {
      get { return version_; }
      set {
        version_ = value;
      }
    }

    /// <summary>Field number for the "eventSource" field.</summary>
    public const int EventSourceFieldNumber = 2;
    private global::System.Protobuf.guid eventSource_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::System.Protobuf.guid EventSource {
      get { return eventSource_; }
      set {
        eventSource_ = value;
      }
    }

    /// <summary>Field number for the "artifact" field.</summary>
    public const int ArtifactFieldNumber = 3;
    private global::System.Protobuf.guid artifact_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::System.Protobuf.guid Artifact {
      get { return artifact_; }
      set {
        artifact_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as VersionedEventSource);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(VersionedEventSource other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (!object.Equals(Version, other.Version)) return false;
      if (!object.Equals(EventSource, other.EventSource)) return false;
      if (!object.Equals(Artifact, other.Artifact)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (version_ != null) hash ^= Version.GetHashCode();
      if (eventSource_ != null) hash ^= EventSource.GetHashCode();
      if (artifact_ != null) hash ^= Artifact.GetHashCode();
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
      if (version_ != null) {
        output.WriteRawTag(10);
        output.WriteMessage(Version);
      }
      if (eventSource_ != null) {
        output.WriteRawTag(18);
        output.WriteMessage(EventSource);
      }
      if (artifact_ != null) {
        output.WriteRawTag(26);
        output.WriteMessage(Artifact);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (version_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Version);
      }
      if (eventSource_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(EventSource);
      }
      if (artifact_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Artifact);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(VersionedEventSource other) {
      if (other == null) {
        return;
      }
      if (other.version_ != null) {
        if (version_ == null) {
          Version = new global::Dolittle.Events.Relativity.Microservice.EventSourceVersion();
        }
        Version.MergeFrom(other.Version);
      }
      if (other.eventSource_ != null) {
        if (eventSource_ == null) {
          EventSource = new global::System.Protobuf.guid();
        }
        EventSource.MergeFrom(other.EventSource);
      }
      if (other.artifact_ != null) {
        if (artifact_ == null) {
          Artifact = new global::System.Protobuf.guid();
        }
        Artifact.MergeFrom(other.Artifact);
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
            if (version_ == null) {
              Version = new global::Dolittle.Events.Relativity.Microservice.EventSourceVersion();
            }
            input.ReadMessage(Version);
            break;
          }
          case 18: {
            if (eventSource_ == null) {
              EventSource = new global::System.Protobuf.guid();
            }
            input.ReadMessage(EventSource);
            break;
          }
          case 26: {
            if (artifact_ == null) {
              Artifact = new global::System.Protobuf.guid();
            }
            input.ReadMessage(Artifact);
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code
