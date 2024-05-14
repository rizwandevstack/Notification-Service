import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddEmailTemplateData1715588198310 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const params = [
      {
        name: 'Registration',
        description: 'Send email on buyer registeration',
        type: 'B',
        payload: '',
      },
      {
        name: 'OTP code',
        description: 'Buyer side OTP code',
        type: 'B',
        payload: '',
      },
      {
        name: 'Forgot Password Mail',
        description: 'Forgot password email ',
        type: 'B',
        payload: '',
      },
      {
        name: 'Newsletter Email',
        description: 'Subscribe newsletter',
        type: 'B',
        payload: '',
      },
      {
        name: 'Checkout',
        description: 'Buyer checkout on order placed',
        type: 'B',
        payload: '',
      },
      {
        name: 'Mail To Vendors',
        description: 'Mail To Vendors On Checkout',
        type: 'B',
        payload: '',
      },
      {
        name: 'Contact Us',
        description: 'Contact Us Buyer Side',
        type: 'B',
        payload: '',
      },
      {
        name: 'OTP Code',
        description: 'Vendor side OTP code send',
        type: 'V',
        payload: '',
      },
      {
        name: 'Order Shipped',
        description: 'Order shippment',
        type: 'V',
        payload: '',
      },
      {
        name: 'Order Cancel',
        description: 'email to vendors on order cancellation from buyer',
        type: 'B',
        payload: '',
      },
      {
        name: 'Order Cancel',
        description: 'email to buyer on order cancellation from buyer',
        type: 'B',
        payload: '',
      },
      {
        name: 'Order Cancel',
        description: 'email to vendor from seller side on order cancellation',
        type: 'V',
        payload: '',
      },
      {
        name: 'Order Cancel',
        description: 'email to buyer on order cancellation from seller side',
        type: 'V',
        payload: '',
      },
      {
        name: 'Tracking Added',
        description: 'Email to buyer on tracking shippment by vendor email ',
        type: 'V',
        payload: '',
      },
      {
        name: 'Tracking updated',
        description: 'Email to buyer on update tracking from seller side',
        type: 'V',
        payload: '',
      },
      {
        name: 'Tracking Added',
        description: 'Return order tracking added by buyer email ',
        type: 'B',
        payload: '',
      },
      {
        name: 'Tracking Updated',
        description: 'Return order Tracking updated by buyer',
        type: 'B',
        payload: '',
      },
      {
        name: 'Order Delivered',
        description: 'Order delivered to Buyer',
        type: 'B',
        payload: '',
      },
      {
        name: 'Rating Approval Notify',
        description: 'Rating Approval Notify to admin to display on buyer side',
        type: 'B',
        payload: '',
      },
      {
        name: 'Product Question Approval Notify',
        description:
          'Product Question Approval Notify to admin to display on buyer side',
        type: 'B',
        payload: '',
      },
      {
        name: 'Vendor Profile In Review',
        description:
          'send email to vendor about profile in review while he/she updated his/her profile',
        type: 'V',
        payload: '',
      },
      {
        name: 'Order Return',
        description: 'email to vendor on order return from buyer',
        type: 'B',
        payload: '',
      },
      {
        name: 'Invite sub seller',
        description: 'send email to sub seller about his/her account creation',
        type: 'V',
        payload: '',
      },
      {
        name: 'Contact Us Request',
        description: 'Contact us request on admin side',
        type: 'A',
        payload: '',
      },
      {
        name: 'Vendor registration',
        description: 'email to vendor on registration',
        type: 'V',
        payload: '',
      },
      {
        name: 'Order Return Request',
        description: 'email to vendors on order return request from buyer',
        type: 'V',
        payload: '',
      },
      {
        name: 'Temporary Password',
        description: 'Temporary Password',
        type: 'A',
        payload: '',
      },
      {
        name: 'unsubscribe newsletter',
        description: 'mail for unsubscribe newsletter notification',
        type: 'B',
        payload: '',
      },
      {
        name: 'Contact Us Request',
        description: 'Contact us request on admin side',
        type: 'A',
        payload: '',
      },
      {
        name: 'Order Return Request',
        description: 'Contact us request on admin side',
        type: 'A',
        payload: '',
      },
      {
        name: 'Rating approval notify to buyer',
        description:
          'Rating approval notify to buyer when admin approves rating',
        type: 'B',
        payload: '',
      },
      {
        name: 'Notify vendor',
        description: 'Notidy bendor on promotion/campaign updation',
        type: 'V',
        payload: '',
      },
      {
        name: 'notify vendor on profile approval',
        description: 'Notify vendor when his profile approved by admin',
        type: 'V',
        payload: '',
      },
      {
        name: 'Payment Failed',
        description: 'Online payment failed on checkout',
        type: 'B',
        payload: '',
      },
      {
        name: 'Product approval notification',
        description: 'Notify vendor on product approval',
        type: 'V',
        payload: '',
      },
      {
        name: 'Return Delivery not available',
        description: 'Vendor Profile Update to admin',
        type: 'A',
        payload: '',
      },
      {
        name: 'Vendor Profile Identity Proof',
        description: 'Vendor Profile Identity Proof to admin',
        type: 'A',
        payload: '',
      },
      {
        name: 'Return Request Raised',
        description: 'Vendor Profile Identity Proof to admin',
        type: 'A',
        payload: '',
      },
      {
        name: 'Return Initiated ',
        description: 'Vendor Profile Identity Proof to admin',
        type: 'A',
        payload: '',
      },
      {
        name: 'Return Pickedup',
        description: 'Vendor Profile Seller Store to admin',
        type: 'A',
        payload: '',
      },
      {
        name: 'Return Transist by Customer',
        description: 'Vendor Product Stock to admin',
        type: 'A',
        payload: '',
      },
      {
        name: 'Return Deliverd',
        description: 'Vendor Product Update to admin',
        type: 'A',
        payload: '',
      },
      {
        name: 'Returned ',
        description: 'Vendor Product Unavailability to admin',
        type: 'A',
        payload: '',
      },
      {
        name: 'Product',
        description: 'Product Related Notifications',
        type: 'A',
        payload: '',
      },
      {
        name: 'Seller Profile',
        description: 'Seller Profile Related Notifications',
        type: 'A',
        payload: '',
      },
      {
        name: 'Seller Campaign',
        description: 'Seller Campaign Related Notifications',
        type: 'A',
        payload: '',
      },
      {
        name: 'Shipped to Vendor',
        description: 'Shippment email to Vendor',
        type: 'V',
        payload: '',
      },
    ];
    await queryRunner.manager.insert('emails', params);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM emails`);
  }
}
