---
title: CoopCycle 6.19.0
date: 2026-10-27
version: v6.19.0
summary: See when filters hide dispatch tasks, duplicate pricing rules, find the orders holding up invoicing, and RDC improvements.
---

## New

### Dispatch: see when filters are hiding tasks

When the active filters hide some of the day's tasks, a yellow **"N tasks hidden"** badge now appears next to the filters button. Hover it for a reminder of what to do: open the filters to change them, or clear them to show everything.

Cancelled tasks are hidden by default, so a day where every task was cancelled no longer looks like an empty dashboard.

![The "7 tasks hidden" badge next to the filters button, with its explanation](https://github.com/coopcycle/coopcycle-web/releases/download/v6.19.0/dispatch-hidden-tasks.png)

### Pricing: duplicate a rule in one click

Every pricing rule now has a **Duplicate** button, next to the delete button. The copy appears right below the original, with everything currently in the editor, including changes you haven't saved yet.

It makes building price ranges faster: duplicate the "2 to 6 km" rule, change the distance and the price, and you have your "6 to 14 km" rule. As with any change, click **Save** to keep it.

![The Duplicate button at the top right of a pricing rule](https://github.com/coopcycle/coopcycle-web/releases/download/v6.19.0/pricing-duplicate-rule.png)

### Invoicing: find the orders that are holding up invoicing

On the Invoicing page, the warning about orders still in progress ("new" or "accepted") now has a **See orders** link. It opens the order list already filtered on those orders, for the period you selected, so you can complete or cancel them before invoicing.

![The pending orders warning with its new "See orders" link](https://github.com/coopcycle/coopcycle-web/releases/download/v6.19.0/invoicing-pending-orders.png)

## Changed

- **Dispatch:** clicking the incident icon on a courier's task list no longer changes your dashboard filters. Before, it hid every task without an incident.

## Fixed

- **Dispatch:** when you change the date of a task that is already assigned to another day, the task now moves to the courier's list for the new day. Before, it stayed on the old day, so neither the dispatch nor the courier app showed it on the new day.
- **Packages and weight:** cancelled tasks are no longer counted in the package and weight totals of a delivery (for example, a multi-drop delivery where one drop-off was cancelled).
- **Language:** the interface could switch to Basque for no apparent reason. This no longer happens.
## Deliveries received through RDC (Applicolis and other providers)

For cooperatives that receive deliveries from Applicolis or another provider connected through RDC:

- The **label number printed on the parcel** is now the delivery's reference, and it appears as a "Reference" line at the top of the comments on both the pickup and the drop-off. Riders can match a parcel to its task at a glance.
- The **names of the pickup and drop-off places** are kept on the addresses. When the recipient has no name, the drop-off place name is used.
- The **sender** is set on the pickup, and the **description of the goods** and the **instructions attached to each place** are added to the task comments.
- The parcel **weight** is now set on the pickup.
- **More reliable:** when something went wrong while receiving a delivery, the provider could be left without a confirmation. Failed deliveries are now retried properly.

---

**Full changelog:** https://github.com/coopcycle/coopcycle-web/compare/v6.18.4...v6.19.0
