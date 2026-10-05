export type Project = {
  slug: string;
  title: string;
  category: string;
  status: string;
  summary: string;
  tags: string[];
  repo?: string;
  report?: string;
  doi?: string;
  image?: string;
  caption?: string;
  sections: { title: string; body: string }[];
  limits: string;
  metrics?: { value: string; label: string }[];
};
export const projects: Project[] = [
  {
    slug: "minimum-lap-time",
    title: "Minimum-Lap-Time Simulator",
    category: "OPTIMAL CONTROL / MOTORSPORT",
    status: "V2.1 · Executed four-circuit study",
    summary:
      "A racing line and speed profile, solved together. An optimal-control study connecting vehicle dynamics to real telemetry.",
    tags: ["Python", "CasADi", "IPOPT", "Radau collocation", "FastF1"],
    repo: "f1-minimum-lap-time-simulator",
    image: "lap-monza",
    caption:
      "Monza: simulation and recorded telemetry. Original V2.1 repository output.",
    metrics: [
      { value: "4", label: "Circuits evaluated" },
      { value: "2 + 2", label: "Calibration + held-out" },
      { value: "−0.89%", label: "Suzuka lap-time error" },
    ],
    sections: [
      {
        title: "A line is only fast if the vehicle can follow it.",
        body: "The engineering problem is to choose both a path through a circuit and a speed profile while respecting tyre-force, power, boundary and periodicity constraints. Optimizing those decisions together connects local corner behaviour to total lap time.",
      },
      {
        title: "From physical model to constrained trajectory.",
        body: "The Python model combines quadratic drag and downforce, power and tractive-force limits, quasi-static load transfer and load-sensitive tyre-force constraints. Degree-three Radau direct collocation turns the trajectory problem into a nonlinear program solved with CasADi and IPOPT.",
      },
      {
        title: "The original benchmark.",
        body: "The November–December 2025 project covered six circuit centerlines. The revised résumé records an uncalibrated comparison with 2021 Monza telemetry: +6.28% lap-time error and 24.29 km/h speed RMSE. The V2.1 figures below belong to a separate, later four-circuit study using 2023 telemetry; they are not the same benchmark.",
      },
      {
        title: "Calibrate once. Evaluate elsewhere.",
        body: "V2.1 uses 2023 qualifying telemetry. Monza and Silverstone are calibration circuits; a frozen generic vehicle is then evaluated on Bahrain and Suzuka without retuning. Four predeclared candidates vary power and tyre grip by 0 or +5%. The study separates numerical feasibility from empirical agreement.",
      },
      {
        title: "Look beyond the stopwatch.",
        body: "The frozen vehicle produces signed lap-time errors of +2.11% at Monza, −1.77% at Silverstone, −1.70% at Bahrain and −0.89% at Suzuka. Speed RMSE remains 14.16–22.36 km/h. Close total times therefore do not imply that the local speed, braking or corner behaviour matches the recorded vehicle.",
      },
      {
        title: "Verification and next questions.",
        body: "Dense-force, boundary, periodicity, quadrature and independent local-integration checks test numerical feasibility. Corner residuals, cumulative time delta and parameter sensitivity expose where a plausible total lap can conceal model mismatch. Improving those residuals is a more meaningful next step than claiming professional F1 fidelity.",
      },
    ],
    limits:
      "A generic planar vehicle, approximate centerlines and widths, fixed aero despite real DRS, unknown fuel and tyre conditions, and no tyre or steering transients. A local optimum is not proof of global optimality. Original circuit data derives from TUMFTM/racetrack-database under LGPL-3.0.",
  },
  {
    slug: "state-estimation-nmpc",
    title: "Vehicle State Estimation & NMPC",
    category: "ESTIMATION / CLOSED-LOOP CONTROL",
    status: "Ongoing · Active development",
    summary:
      "Noisy measurements become an estimated state. A constrained controller uses that estimate to track a racing line.",
    tags: ["EKF", "Sensor fusion", "NMPC", "CasADi", "Python"],
    repo: "f1-state-estimation-nmpc",
    image: "nmpc-trajectory",
    caption:
      "Committed 60-second Monza EKF + NMPC closed-loop segment. Original repository output.",
    metrics: [
      { value: "60 s", label: "Evaluated Monza segment" },
      { value: "6", label: "Estimated vehicle states" },
      { value: "0", label: "Track-limit violations in this run" },
    ],
    sections: [
      {
        title: "The controller does not know the true state.",
        body: "GPS, IMU, yaw-rate and wheel-speed measurements arrive with different noise, bias and sampling characteristics. The project couples a nonlinear Extended Kalman Filter to a nonlinear model predictive controller, so control decisions use the estimated state rather than perfect ground truth.",
      },
      {
        title: "A model shared by estimation and control.",
        body: "A nonlinear dynamic bicycle model describes position, heading, longitudinal and lateral velocity, and yaw rate. Saturating tyre forces, aerodynamic load sensitivity, drag and a friction-circle limiter define the vehicle response. The EKF uses numerical Jacobians and a nonlinear process model.",
      },
      {
        title: "Predict, constrain, act, repeat.",
        body: "The NMPC solves a multiple-shooting problem in CasADi/IPOPT. It penalizes lateral, heading and speed errors while enforcing steering, steering-rate, force and track-boundary constraints. Warm starting shifts the previous solution; a failed solve falls back to the previous command.",
      },
      {
        title: "What has actually run.",
        body: "The committed Monza experiment covers 60 seconds and multiple corners, with 1.49 m RMS lateral error and zero track-limit violations. Additional experiments compare Stanley, LQR and NMPC, introduce a four-second GPS dropout, and reduce plant grip to 65% of the controller’s nominal model.",
      },
      {
        title: "From a working framework to a faster controller.",
        body: "The next priorities include speed-tracking tuning, surveyed geometry, wider model-mismatch studies and a code-generated solver such as acados. The baseline comparison uses ground-truth feedback to isolate controller behaviour; the EKF experiments use estimated feedback.",
      },
    ],
    limits:
      "Active research software, not a real-time controller. Current IPOPT solves average roughly 150–300 ms per step. Circuit geometry is schematic, the speed reference is heuristic, parameters are uncalibrated and the committed Monza run is a segment rather than a complete lap.",
  },
  {
    slug: "f1-energy-management",
    title: "Hybrid Energy Management",
    category: "ENERGY / CONSTRAINED OPTIMIZATION",
    status: "Methodology demonstrator",
    summary:
      "Where should a limited electrical energy budget be deployed or recovered around a lap?",
    tags: ["Optimal control", "MGU-K", "Battery dynamics", "CasADi", "IPOPT"],
    repo: "f1-energy-management",
    image: "energy-profiles",
    caption:
      "Bahrain energy profiles across the repository’s three strategy implementations.",
    sections: [
      {
        title: "Energy is a trajectory decision.",
        body: "Electrical deployment can improve acceleration, but the battery and recovery budget are finite. This project studies how a lap-wide optimization allocates deployment and regeneration compared with rule-based and greedy policies.",
      },
      {
        title: "An explicit energy balance.",
        body: "A quasi-steady point-mass vehicle model couples drag, downforce, tyre-force limits and drivetrain efficiency to battery power flow. Direct collocation optimizes the trajectory with state-of-charge bounds, periodic boundary conditions and energy-conservation constraints.",
      },
      {
        title: "Constraints with provenance.",
        body: "Regulation-inspired constraints are isolated in a versioned configuration with article references. The repository uses a documented historical FIA issue as its basis and explicitly separates unverified later refinements. It does not establish compliance with the latest regulation text.",
      },
      {
        title: "Numerical honesty matters.",
        body: "The saved race-mode results cover Monza, Silverstone, Bahrain and Suzuka. The optimized strategy does not consistently beat the heuristics at the current discretization. The reported strategy gaps sit within the method’s mesh-convergence noise floor, so they cannot substantiate a performance advantage.",
      },
      {
        title: "The next experiment is convergence.",
        body: "The repository includes mesh-convergence, multistart, reproducibility and sensitivity studies. Refining numerical agreement between optimization and forward simulation is necessary before interpreting strategy differences as an engineering result.",
      },
    ],
    limits:
      "A methodology demonstrator with generic vehicle parameters and simplified circuit geometry. Practical-grid solutions are not yet mesh-converged. The solver’s “Global-Optimal” strategy name does not demonstrate global optimality or validated real-car performance.",
  },
  {
    slug: "reusable-launch-vehicle",
    title: "Returning from the edge of space",
    category: "RESEARCH / GUIDANCE & NAVIGATION",
    status: "IIT Bombay · September 2024–November 2025",
    summary:
      "Reusable launch vehicle research connecting mission trajectory, terminal guidance and the physical demands of landing.",
    tags: [
      "RLV",
      "G-FOLD concepts",
      "GPS/INS",
      "Monte Carlo",
      "Landing guidance",
    ],
    sections: [
      {
        title: "A successful mission includes the return.",
        body: "Under Prof. Dhwanil Shukla at IIT Bombay, this research explored autonomous return and landing of a reusable launch vehicle. Mission-level trajectory and mass analysis were considered alongside terminal guidance and landing-system design.",
      },
      {
        title: "Guidance meets the structure.",
        body: "The work examined G-FOLD and terminal-velocity guidance concepts for controlled descent. Landing-leg CAD and touchdown-load assessment connected the guidance objectives to physical landing-system constraints. The public overview is based on the supplied résumé; it makes no claim of flight validation.",
      },
      {
        title: "From trajectory to navigation robustness.",
        body: "At Space Applications Centre, ISRO, a May–July 2025 research internship under Dr. Ashish Kumar Shukla involved reusable launch vehicle guidance and navigation, GPS/INS fusion, pseudolite navigation strategies and Monte Carlo simulation.",
      },
      {
        title: "The connecting idea.",
        body: "A trajectory is useful only if a vehicle can estimate its state and execute the required control actions under uncertainty. That connection between model, measurement and actuation also motivates my later work on vehicle state estimation and constrained control.",
      },
    ],
    limits:
      "This page is a public, résumé-grounded overview. Internal models, sensitive information and unpublished institutional results are not distributed. No flight-test or numerical-performance claims are made here.",
  },
  {
    slug: "satellite-lqr",
    title: "Satellite Attitude Control",
    category: "SPACE SYSTEMS / STATE FEEDBACK",
    status: "Course project · August 2026–present",
    summary:
      "Three-axis attitude dynamics, a six-state model and a feedback controller balancing pointing error against control effort.",
    tags: ["State-space modelling", "LQR", "Stability", "MATLAB"],
    sections: [
      {
        title: "Regulating orientation.",
        body: "This State Space Methods for Flight Vehicles project, under Prof. Shashi Ranjan Kumar, models three-axis satellite attitude dynamics as a six-state system linearized around nominal equilibrium.",
      },
      {
        title: "A deliberate trade-off.",
        body: "Controllability and observability analysis precede the LQR design. State and input weighting matrices express the trade-off between regulation error and actuator effort. Closed-loop simulations explore stability, settling and the sensitivity to these weights.",
      },
      {
        title: "What the visualization means.",
        body: "The interactive satellite on this site is an original illustrative model, not a flight article or simulation result. Its exploded view separates the ideas of sensing, actuation and dynamics. Numerical response plots will be added when a public project report is available.",
      },
    ],
    limits:
      "Ongoing course work. This overview is supported by the supplied CV; no numerical convergence or hardware-performance results are claimed.",
  },
  {
    slug: "mems-pull-in",
    title: "MEMS Pull-In Analysis",
    category: "ENGINEERING ARCHIVE / ELECTROMECHANICS",
    status: "Course project · August 2026–present",
    summary:
      "Electrostatic pull-in in a parallel-plate actuator: a small device with a strongly nonlinear response.",
    tags: ["Nonlinear systems", "Electrostatics", "FEA", "Actuation"],
    sections: [
      {
        title: "When equilibrium disappears.",
        body: "A parallel-plate electrostatic actuator couples electrical attraction to a restoring mechanical force. As voltage increases, the nonlinear force-displacement relationship can lead to loss of stable equilibrium: pull-in.",
      },
      {
        title: "From device mechanics to actuation.",
        body: "This Sensors and Actuators course project under Prof. Pradeep Dixit combines analytical electrostatic–spring equilibrium with coupled electrostatic–structural FEA. Gap, plate area and spring stiffness are varied to compare analytical pull-in predictions with simulation.",
      },
      {
        title: "Evidence and scope.",
        body: "The revised résumé documents the parallel-plate pull-in analysis, coupled FEA and parametric comparisons. A public technical report is not yet linked, so numerical voltage thresholds and validation errors are deliberately omitted.",
      },
    ],
    limits:
      "No measured pull-in voltage or simulation accuracy is asserted without the corresponding public report.",
  },
  {
    slug: "human-motion-estimation",
    title: "Human Motion State Estimation",
    category: "ENGINEERING ARCHIVE / SENSOR FUSION",
    status: "Course project · January–April 2026",
    summary:
      "Markerless pose estimation and accelerometer measurements connect observed motion to joint mechanics.",
    tags: ["MediaPipe Pose", "Sensor fusion", "Biomechanics"],
    sections: [
      {
        title: "From images to joint mechanics.",
        body: "Under Prof. Darshan Shah in Joint Biomechanics, a MediaPipe Pose pipeline extracted hip, knee and ankle keypoints from 24 images across six subjects and four static poses. Pose estimates were correlated with accelerometer data and compared against goniometer measurements.",
      },
      {
        title: "A small, defined study.",
        body: "The revised résumé reports correlation coefficients of r = 0.984 for angles and r = 0.990 for computed moments. Correlation describes agreement in variation; it is not a percentage accuracy or a substitute for absolute-error analysis.",
      },
    ],
    limits:
      "Résumé-reported course results from six subjects and static poses. No public dataset or report is linked; broader dynamic-motion or clinical performance is not established.",
  },
  {
    slug: "stol-airfoil-design",
    title: "STOL Aircraft & Airfoil Design",
    category: "ENGINEERING ARCHIVE / AERODYNAMICS",
    status: "Course project · January–April 2024",
    summary:
      "Airfoil analysis, computational flow and aircraft-level modelling for short takeoff performance.",
    tags: ["ANSYS Fluent", "OpenVSP", "Thin Airfoil Theory"],
    sections: [
      {
        title: "From an airfoil to an aircraft.",
        body: "This Low Speed Aerodynamics project under Prof. Dhwanil Shukla combined NACA 5311 analysis in ANSYS Fluent, a Python Thin Airfoil Theory tool, and STOL aircraft modelling in OpenVSP with empirical drag methods.",
      },
      {
        title: "Reported design outputs.",
        body: "The revised résumé records a peak lift-to-drag ratio of 61.11, a stall angle of 15 degrees, a modelled takeoff distance of 157 m and an 8.3% increase in lift coefficient. These are course analysis outputs, not flight-test measurements.",
      },
    ],
    limits:
      "Résumé-grounded overview. Mesh studies, operating conditions and the reference configuration for the percentage improvement are not available in a public report.",
  },
  {
    slug: "universal-testing-machine",
    title: "Universal Testing Machine",
    category: "ENGINEERING ARCHIVE / DESIGN & INSTRUMENTATION",
    status: "Course project · August–November 2023",
    summary:
      "A student-built loading and measurement system for exploring material stiffness.",
    tags: ["Mechanical design", "Arduino", "Instrumentation"],
    sections: [
      {
        title: "Build, load, measure.",
        body: "In a six-person Makerspace team guided by Prof. Joseph John and Prof. K. N. Jonnalagadda, I co-developed a Universal Testing Machine to estimate specimen Young’s modulus. A lead-screw transmission applied controlled loads.",
      },
      {
        title: "Connecting mechanics to data.",
        body: "Arduino UNO, an IR sensor and PWM supported force–displacement tracking and automated test-data generation. The project connected physical fabrication, actuation and measurement.",
      },
    ],
    limits:
      "Course prototype described in the revised résumé. No calibrated accuracy, certified testing capability or material-result dataset is claimed.",
  },
];
export const projectHref = (p: Project) =>
  p.slug === "reusable-launch-vehicle"
    ? "/research/reusable-launch-vehicle"
    : `/projects/${p.slug}`;
