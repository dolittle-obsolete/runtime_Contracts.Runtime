// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: Events.Relativity/interaction/property_bag.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Dolittle.Runtime.Events.Relativity.Interaction.Grpc {

  /// <summary>Holder for reflection information generated from Events.Relativity/interaction/property_bag.proto</summary>
  public static partial class PropertyBagReflection {

    #region Descriptor
    /// <summary>File descriptor for Events.Relativity/interaction/property_bag.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static PropertyBagReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "CjBFdmVudHMuUmVsYXRpdml0eS9pbnRlcmFjdGlvbi9wcm9wZXJ0eV9iYWcu",
            "cHJvdG8SGmRvbGl0dGxlLmV2ZW50cy5yZWxhdGl2aXR5GhJzeXN0ZW0vdmFs",
            "dWUucHJvdG8ikAEKC1Byb3BlcnR5QmFnEkMKBnZhbHVlcxgBIAMoCzIzLmRv",
            "bGl0dGxlLmV2ZW50cy5yZWxhdGl2aXR5LlByb3BlcnR5QmFnLlZhbHVlc0Vu",
            "dHJ5GjwKC1ZhbHVlc0VudHJ5EgsKA2tleRgBIAEoCRIcCgV2YWx1ZRgCIAEo",
            "CzINLnN5c3RlbS5WYWx1ZToCOAFCNqoCM0RvbGl0dGxlLlJ1bnRpbWUuRXZl",
            "bnRzLlJlbGF0aXZpdHkuSW50ZXJhY3Rpb24uR3JwY2IGcHJvdG8z"));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::System.Protobuf.ValueReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Dolittle.Runtime.Events.Relativity.Interaction.Grpc.PropertyBag), global::Dolittle.Runtime.Events.Relativity.Interaction.Grpc.PropertyBag.Parser, new[]{ "Values" }, null, null, new pbr::GeneratedClrTypeInfo[] { null, })
          }));
    }
    #endregion

  }
  #region Messages
  /// <summary>
  /// Represents the property bag
  /// </summary>
  public sealed partial class PropertyBag : pb::IMessage<PropertyBag> {
    private static readonly pb::MessageParser<PropertyBag> _parser = new pb::MessageParser<PropertyBag>(() => new PropertyBag());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<PropertyBag> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Dolittle.Runtime.Events.Relativity.Interaction.Grpc.PropertyBagReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public PropertyBag() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public PropertyBag(PropertyBag other) : this() {
      values_ = other.values_.Clone();
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public PropertyBag Clone() {
      return new PropertyBag(this);
    }

    /// <summary>Field number for the "values" field.</summary>
    public const int ValuesFieldNumber = 1;
    private static readonly pbc::MapField<string, global::System.Protobuf.Value>.Codec _map_values_codec
        = new pbc::MapField<string, global::System.Protobuf.Value>.Codec(pb::FieldCodec.ForString(10), pb::FieldCodec.ForMessage(18, global::System.Protobuf.Value.Parser), 10);
    private readonly pbc::MapField<string, global::System.Protobuf.Value> values_ = new pbc::MapField<string, global::System.Protobuf.Value>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::MapField<string, global::System.Protobuf.Value> Values {
      get { return values_; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as PropertyBag);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(PropertyBag other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (!Values.Equals(other.Values)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      hash ^= Values.GetHashCode();
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
      values_.WriteTo(output, _map_values_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      size += values_.CalculateSize(_map_values_codec);
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(PropertyBag other) {
      if (other == null) {
        return;
      }
      values_.Add(other.values_);
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
            values_.AddEntriesFrom(input, _map_values_codec);
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code
