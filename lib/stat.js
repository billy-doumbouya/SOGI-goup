/**
 * lib/stats.js
 * Chiffres clés affichés dans StatsSection (page d'accueil).
 *
 * Config statique volontairement séparée du composant : ces valeurs
 * changent rarement (quelques fois par an), donc pas besoin de les
 * brancher sur la base de données / dashboard admin.
 *
 * ⚠️ À METTRE À JOUR :
 * - experienceYears : nombre d'années d'activité réelles (à confirmer)
 * - projectsCompleted / clientsSatisfied : valeurs de démarrage, à
 *   ajuster au fur et à mesure que l'activité grandit.
 *
 * Pour modifier : éditer directement les valeurs ci-dessous, redéployer.
 */

export const STATS = [
  {
    value: 4,
    suffix: '',
    label: 'Filiales actives',
    desc: 'BTP · Immo · Énergie · Formation',
  },
  {
    value: 1, // ⚠️ à ajuster dès que la date de création officielle est confirmée
    suffix: '+',
    label: "Année d'activité",
    desc: 'En Guinée et Afrique de l\'Ouest',
  },
  {
    value: 10, // ⚠️ valeur de démarrage, à augmenter avec l'activité réelle
    suffix: '+',
    label: 'Projets en cours',
    desc: 'Constructions, installations, formations',
  },
  {
    value: 20, // ⚠️ valeur de démarrage, à augmenter avec l'activité réelle
    suffix: '+',
    label: 'Clients accompagnés',
    desc: 'Particuliers, entreprises, institutions',
  },
]