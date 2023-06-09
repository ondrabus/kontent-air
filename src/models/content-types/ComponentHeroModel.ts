import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
import { type HeroCardModel } from './HeroCardModel';

/**
 * Generated by '@kontent-ai/model-generator@5.10.0'
 *
 * [Component] Hero
 * Id: aeb54257-a5a2-4fb5-aaf0-8ee4fc933cb4
 * Codename: component_hero
 */
export type ComponentHeroModel = IContentItem<{
  /**
   * Cards (modular_content)
   * Required: true
   * Id: 5aecdc8b-adb8-4007-b0c5-e79956e363ae
   * Codename: cards
   */
  cards: Elements.LinkedItemsElement<HeroCardModel>;

  /**
   * Video (asset)
   * Required: true
   * Id: 6c1d6439-ea7f-4648-a57e-142d7227a844
   * Codename: video
   */
  video: Elements.AssetsElement;
}>;
