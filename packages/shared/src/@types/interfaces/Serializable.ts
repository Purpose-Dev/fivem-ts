export interface Serializable {
	serialize(): string;
	deserialize(input: string): this;
}
