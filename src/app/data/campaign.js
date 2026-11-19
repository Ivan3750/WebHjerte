// Black Friday-kampagne. Slå fra ved at sætte `active: false` eller lade datoen udløbe.
export const BLACK_FRIDAY = {
  active: true,
  discount: 15,
  // Slutter mandag 30. november 2026 kl. 23.59 dansk tid (Cyber Monday)
  endsAt: "2026-11-30T23:59:59+01:00",
  endLabel: "30. november",
  href: "/kontakt",
};

export const isBlackFridayLive = (now = Date.now()) =>
  BLACK_FRIDAY.active && now <= new Date(BLACK_FRIDAY.endsAt).getTime();
