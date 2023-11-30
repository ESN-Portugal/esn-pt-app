import { CustomBlockMeta, Languages, Resource } from 'idea-toolbox';

import { User } from '../models/user.model';

import { ServiceLanguages } from './serviceLanguages.enum';

export const LANGUAGES = new Languages({ default: ServiceLanguages.English, available: [ServiceLanguages.English] });

export class Configurations extends Resource {
  static PK = 'EGM';

  /**
   * A fixed primary key.
   */
  PK: string;
  /**
   * Whether the registrations are open for ESNers.
   */
  isRegistrationOpenForESNers: boolean;
  /**
   * Whether externals and guests can register.
   */
  isRegistrationOpenForExternals: boolean;
  /**
   * Whether the delegation leaders can assign spots.
   */
  canCountryLeadersAssignSpots: boolean;
  /**
   * A custom block containing the definition of custom sections and fields for the registration form.
   */
  registrationFormDef: CustomBlockMeta;
  /**
   * The currency for the event, expressed in three letters (e.g. EUR).
   */
  currency: string;
  /**
   * The possible spot types.
   */
  spotTypes: string[];
  /**
   * The price for each spot type.
   */
  pricePerSpotTypes: Record<string, number>;
  /**
   * The list of all the current ESN countries.
   */
  sectionCountries: string[];

  load(x: any): void {
    super.load(x);
    this.PK = Configurations.PK;
    this.isRegistrationOpenForESNers = this.clean(x.isRegistrationOpenForESNers, Boolean);
    this.isRegistrationOpenForExternals = this.clean(x.isRegistrationOpenForExternals, Boolean);
    this.canCountryLeadersAssignSpots = this.clean(x.canCountryLeadersAssignSpots, Boolean);
    this.registrationFormDef = new CustomBlockMeta(x.registrationFormDef, LANGUAGES);
    this.currency = this.clean(x.currency, String);
    this.spotTypes = this.cleanArray(x.spotTypes, String);
    this.pricePerSpotTypes = {};
    if (x.pricePerSpotTypes)
      this.spotTypes.forEach(st => (this.pricePerSpotTypes[st] = this.clean(x.pricePerSpotTypes[st], Number, 0)));
    this.sectionCountries = this.cleanArray(x.sectionCountries, String);
  }

  safeLoad(newData: any, safeData: any): void {
    super.safeLoad(newData, safeData);
    this.PK = safeData.PK;
  }

  validate(): string[] {
    const e = super.validate();
    this.registrationFormDef.validate(LANGUAGES).forEach(ea => e.push(`registrationFormDef.${ea}`));
    return e;
  }

  /**
   * Load a registration form to use in the UI.
   */
  loadRegistrationForm(registrationDef: CustomBlockMeta, existingForm?: any): CustomBlockMeta {
    return existingForm ? registrationDef.loadSections(existingForm) : registrationDef.setSectionsDefaultValues();
  }

  canUserRegister(user: User): boolean {
    return user.isExternal() ? this.isRegistrationOpenForExternals : this.isRegistrationOpenForESNers;
  }
}

/**
 * The types of email templates available.
 */
export enum EmailTemplates {
  SPOT_ASSIGNED = 'spot-assigned',
  REGISTRATION_CONFIRMED = 'registration-confirmed',
  SPOT_TRANSFERRED = 'spot-transferred',
  SPOT_RELEASED = 'spot-released'
}

/**
 * The types of document templates available.
 */
export enum DocumentTemplates {
  INVOICE = 'INVOICE'
}
