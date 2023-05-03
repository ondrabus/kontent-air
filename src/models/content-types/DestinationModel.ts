import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.10.0'
 *
 * Destination
 * Id: b23134f6-1711-412c-9849-076480cc89c8
 * Codename: destination
 */
export type DestinationModel = IContentItem<{
  /**
   * Photo (asset)
   * Required: true
   * Id: bbd9ab4c-aec1-48d8-95f4-141abd67e313
   * Codename: photo
   */
  photo: Elements.AssetsElement;

  /**
   * Text (rich_text)
   * Required: true
   * Id: 6823ebe7-1e6d-4514-87ee-40f99fc4ae2e
   * Codename: text
   */
  text: Elements.RichTextElement;

  /**
   * Title (text)
   * Required: true
   * Id: 83294872-aa35-411d-a9af-179e91c5ef93
   * Codename: title
   */
  title: Elements.TextElement;
}>;