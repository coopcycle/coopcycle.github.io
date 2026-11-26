---
title: CoopCycle 6.23.0
date: 2026-11-12
version: v6.23.0
summary: Charge extra drop-offs from the 2nd one, urgency surcharges on each drop-off, day arrows on the foodtech dashboard, shift duplication, and RDC improvements.
---

This note covers everything since 6.20.0 (versions 6.20.1 to 6.23.0), except the referral program, loyalty program and marketing campaigns.

## New

### Pricing: charge extra drop-offs from the 2nd one

Rules per point have two new conditions: **Dropoff rank (1 = first dropoff)** and **Pickup rank (1 = first pickup)**. They give the position of the point among the delivery's drop-offs (or pickups). Cancelled points are not counted.

Before, a rule on the drop-off type charged every drop-off, the first one included. Now you can charge a fee only from the 2nd drop-off of a multi-drop delivery: add a rule per point with **Dropoff rank > 1** and the fee you want. Existing rules price exactly as before.

When you use **<**, also add a **Type of task** condition: "Dropoff rank < 3" alone also matches the pickups.

![A rule per point named "Extra drop-off" with the condition "Dropoff rank > 1" and a fixed price of 3.00 €](https://github.com/coopcycle/coopcycle-web/releases/download/v6.23.0/pricing-dropoff-rank.png)

### Pricing: urgency surcharge on each drop-off

Rules per point now offer **Dropoff difference (hours)** and **Dropoff difference (days)**. With the existing difference conditions, a rule per point only matched the pickup, so an urgency surcharge was charged once, whatever the number of drop-offs. With the drop-off versions, it is charged on each drop-off that matches.

The old pickup conditions are still there, now labelled **Difference (hours) (Legacy)** and **Difference (days) (Legacy)**, and your existing rules keep working as before.

![A rule per point named "Urgent drop-off" with the condition "Dropoff difference (hours) < 3"](https://github.com/coopcycle/coopcycle-web/releases/download/v6.23.0/pricing-dropoff-urgency.png)

### Foodtech dashboard: previous and next day buttons

The foodtech dashboard now has arrows on each side of the date picker, like the dispatch dashboard, to move one day back or forward without opening the calendar. Restaurants see them on their own dashboard too.

![The arrows on each side of the date picker of the foodtech dashboard](https://github.com/coopcycle/coopcycle-web/releases/download/v6.23.0/foodtech-dashboard-day-arrows.png)

### Shift planning: duplicate a shift by dragging it

In **Shift planning**, hold **Shift** (or **Alt**) while you drag a shift to copy it to the new day or slot instead of moving it. The original stays where it was, and a **Shift duplicated** message confirms the copy.

### Customer Segmentation: sort customers

On the **Customer Segmentation** page, the **Last order**, **Orders** and **Total spent** column headers can now be clicked to sort the list. The first click shows the most recent, most frequent or biggest-spending customers first, and the segment you selected stays selected.

## Changed

- **Card payments:** for shops that have both Stripe and Paygreen set up, card payments now always go through Stripe. Meal vouchers (Swile, Conecs, Restoflash) and the wallets offered through Paygreen are still paid through Paygreen. The **Use Paygreen for this shop** option on the restaurant form says so.
- **Checkout:** customers can now go back a step more easily. The whole step in the progress bar at the top can be clicked, and the address and payment pages have a **Previous** button next to the main button. On a phone, only the small icon under each step used to work, so many customers thought they couldn't go back.
- **Incidents:** couriers can now only see and act on the incidents of tasks assigned to them, or that they reported themselves. Dispatchers and admins still see every incident.

## Fixed

- **Restaurant suggestions:** deleted restaurants no longer appear in the restaurant suggestions of the back office (when you invite or edit a user, in hubs, restaurant groups, Edenred sync and the restaurant list search).
- **Emails:** on an instance where the administrator email had never been set in the settings, pages that send an email (order confirmations, delivery emails) could show an error. Emails are now sent, and customers' replies go to the sender address.

## Deliveries received through RCD (Applicolis, NoWastePharma and other providers)

For cooperatives that receive deliveries from Applicolis or another provider connected through RDC:

- **Cancellations:** when the provider cancels a service request, the delivery is now cancelled in CoopCycle, with its tasks. Before, it kept running.
- **Packages:** the goods the provider describes (for example 4 cartons) can now be added to the drop-off as packages, before the delivery is priced. This needs a mapping between the provider's goods and your packages for each connection: ask your technical contact to set it up.
- **Weight:** the weight of a batch of goods is now multiplied by the number of containers. 6 cartons of 2 kg used to count as 2 kg, and now count as 12 kg.
- **Incidents:** the provider now receives the reason of an incident. Back office reviews (price, address) were wrongly reported to it as failed deliveries.
- **Several providers:** each delivery now goes only to the store linked to its provider. Before, a provider without a store could have its deliveries created, priced and invoiced in another provider's store. Each provider also has its own security key, and the provider's own name is used on its services.
- **More reliable:** status updates are sent to the provider in the background and retried when the provider doesn't accept them, instead of being lost. Cancelling a delivery no longer reports it to the provider as delivered.

---

**Full changelog:** https://github.com/coopcycle/coopcycle-web/compare/v6.20.0...v6.23.0

