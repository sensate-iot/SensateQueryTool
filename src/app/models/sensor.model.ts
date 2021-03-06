/*
 * Sensor model.
 */

export class Sensor {
  public id: string;
  public secret: string;
  public name: string;
  public description: string;
  public storageEnabled: boolean;
  public createdAt: string | Date;
  public updatedAt: string | Date;
  public owner: string;
}
