// Copyright 2017 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {ArithmeticGates} from "src/gates/ArithmeticGates.js"
import {AmplitudeDisplayFamily} from "src/gates/AmplitudeDisplay.js"
import {BitCountGates} from "src/gates/BitCountGates.js"
import {BlochSphereDisplay} from "src/gates/BlochSphereDisplay.js"
import {ComparisonGates} from "src/gates/ComparisonGates.js"
import {Controls} from "src/gates/Controls.js"
import {CountingGates} from "src/gates/CountingGates.js"
import {CycleBitsGates} from "src/gates/CycleBitsGates.js"
import {DensityMatrixDisplayFamily} from "src/gates/DensityMatrixDisplay.js"
import {ErrorInjectionGate} from "src/gates/Debug_ErrorInjectionGate.js"
import {ExponentiatingGates} from "src/gates/ExponentiatingGates.js"
import {FourierTransformGates} from "src/gates/FourierTransformGates.js"
import {HalfTurnGates} from "src/gates/HalfTurnGates.js"
import {
    ImaginaryGate,
    AntiImaginaryGate,
    SqrtImaginaryGate,
    AntiSqrtImaginaryGate
} from "src/gates/Joke_ImaginaryGate.js"
import {IncrementGates} from "src/gates/IncrementGates.js"
import {InputGates} from "src/gates/InputGates.js"
import {InterleaveBitsGates} from "src/gates/InterleaveBitsGates.js"
import {MeasurementGate} from "src/gates/MeasurementGate.js"
import {ModularIncrementGates} from "src/gates/ModularIncrementGates.js"
import {ModularAdditionGates} from "src/gates/ModularAdditionGates.js"
import {ModularMultiplicationGates} from "src/gates/ModularMultiplicationGates.js"
import {ModularMultiplyAccumulateGates} from "src/gates/ModularMultiplyAccumulateGates.js"
import {MultiplicationGates} from "src/gates/MultiplicationGates.js"
import {MultiplyAccumulateGates} from "src/gates/MultiplyAccumulateGates.js"
import {NameGates} from "src/gates/NameGates.js"
import {NeGate} from "src/gates/Joke_NeGate.js"
import {ParametrizedRotationGates} from "src/gates/ParametrizedRotationGates.js"
import {PhaseGradientGates} from "src/gates/PhaseGradientGates.js"
import {PivotFlipGates} from "src/gates/PivotFlipGates.js"
import {PostSelectionGates} from "src/gates/PostSelectionGates.js"
import {PoweringGates} from "src/gates/PoweringGates.js"
import {ProbabilityDisplayFamily} from "src/gates/ProbabilityDisplay.js"
import {QuarterTurnGates} from "src/gates/QuarterTurnGates.js"
import {ReverseBitsGateFamily} from "src/gates/ReverseBitsGate.js"
import {SampleDisplayFamily} from "src/gates/SampleDisplay.js"
import {Detectors} from "src/gates/Detector.js"
import {SpacerGate} from "src/gates/SpacerGate.js"
import {SwapGateHalf} from "src/gates/SwapGateHalf.js"
import {UniversalNotGate} from "src/gates/Impossible_UniversalNotGate.js"
import {VariousXGates} from "src/gates/VariousXGates.js"
import {VariousYGates} from "src/gates/VariousYGates.js"
import {VariousZGates} from "src/gates/VariousZGates.js"
import {VariousRotations} from "src/gates/VariousRotations.js"
import {XorGates} from "src/gates/XorGates.js"
import {ZeroGate} from "src/gates/Joke_ZeroGate.js"
import {seq} from "src/base/Seq.js"

let Gates = {};

/** Gates that have special behavior requiring custom code / logic to handle. */
Gates.Special = {
    Measurement: MeasurementGate,
    SwapHalf: SwapGateHalf
};
/**
 * Gates that display information without affecting the state.
 * (In reality these would require multiple runs of the circuit to do tomography.)
 */
Gates.Displays = {
    AmplitudeDisplayFamily: AmplitudeDisplayFamily,
    ProbabilityDisplayFamily: ProbabilityDisplayFamily,
    SampleDisplayFamily: SampleDisplayFamily,
    DensityMatrixDisplayFamily: DensityMatrixDisplayFamily,
    BlochSphereDisplay: BlochSphereDisplay
};
Gates.Arithmetic = ArithmeticGates;
Gates.BitCountGates = BitCountGates;
Gates.ComparisonGates = ComparisonGates;
Gates.Controls = Controls;
Gates.CountingGates = CountingGates;
Gates.CycleBitsGates = CycleBitsGates;
Gates.Displays.DensityMatrixDisplay = DensityMatrixDisplayFamily.ofSize(1);
Gates.Displays.DensityMatrixDisplay2 = DensityMatrixDisplayFamily.ofSize(2);
Gates.Displays.ChanceDisplay = Gates.Displays.ProbabilityDisplayFamily.ofSize(1);
Gates.ErrorInjection = ErrorInjectionGate;
Gates.Exponentiating = ExponentiatingGates;
Gates.FourierTransformGates = FourierTransformGates;
Gates.HalfTurns = HalfTurnGates;
Gates.ImaginaryGate = ImaginaryGate;
Gates.AntiImaginaryGate = AntiImaginaryGate;
Gates.SqrtImaginaryGate = SqrtImaginaryGate;
Gates.AntiSqrtImaginaryGate = AntiSqrtImaginaryGate;
Gates.IncrementGates = IncrementGates;
Gates.InputGates = InputGates;
Gates.InterleaveBitsGates = InterleaveBitsGates;
Gates.ModularIncrementGates = ModularIncrementGates;
Gates.ModularAdditionGates = ModularAdditionGates;
Gates.ModularMultiplicationGates = ModularMultiplicationGates;
Gates.ModularMultiplyAccumulateGates = ModularMultiplyAccumulateGates;
Gates.MultiplicationGates = MultiplicationGates;
Gates.MultiplyAccumulateGates = MultiplyAccumulateGates;
Gates.NeGate = NeGate;
Gates.OtherX = VariousXGates;
Gates.OtherY = VariousYGates;
Gates.OtherZ = VariousZGates;
Gates.ParametrizedRotationGates = ParametrizedRotationGates;
Gates.PhaseGradientGates = PhaseGradientGates;
Gates.PivotFlipGates = PivotFlipGates;
Gates.PostSelectionGates = PostSelectionGates;
Gates.Powering = PoweringGates;
Gates.QuarterTurns = QuarterTurnGates;
Gates.ReverseBitsGateFamily = ReverseBitsGateFamily;
Gates.Detectors = Detectors;
Gates.SpacerGate = SpacerGate;
Gates.UniversalNot = UniversalNotGate;
Gates.XorGates = XorGates;
Gates.ZeroGate = ZeroGate;

/** @type {!Array.<!Gate>} */
Gates.KnownToSerializer = [
    ...Controls.all,
    ...InputGates.all,
    MeasurementGate,
    SwapGateHalf,
    SpacerGate,
    UniversalNotGate,
    ErrorInjectionGate,
    ZeroGate,
    NeGate,
    ImaginaryGate,
    AntiImaginaryGate,
    SqrtImaginaryGate,
    AntiSqrtImaginaryGate,

    ...AmplitudeDisplayFamily.all,
    ...ProbabilityDisplayFamily.all,
    ...SampleDisplayFamily.all,
    ...DensityMatrixDisplayFamily.all,
    BlochSphereDisplay,

    ...ArithmeticGates.all,
    ...BitCountGates.all,
    ...ComparisonGates.all,
    ...CountingGates.all,
    ...CycleBitsGates.all,
    ...Detectors.all,
    ...ExponentiatingGates.all,
    ...FourierTransformGates.all,
    ...HalfTurnGates.all,
    ...IncrementGates.all,
    ...InterleaveBitsGates.all,
    ...ModularAdditionGates.all,
    ...ModularIncrementGates.all,
    ...ModularMultiplicationGates.all,
    ...ModularMultiplyAccumulateGates.all,
    ...MultiplicationGates.all,
    ...MultiplyAccumulateGates.all,
    ...NameGates.all,
    ...QuarterTurnGates.all,
    ...ParametrizedRotationGates.all,
    ...PhaseGradientGates.all,
    ...PivotFlipGates.all,
    ...PostSelectionGates.all,
    ...PoweringGates.all,
    ...ReverseBitsGateFamily.all,
    ...VariousXGates.all,
    ...VariousYGates.all,
    ...VariousZGates.all,
    ...VariousRotations.all,
    ...XorGates.all
];

let gatesById = seq(Gates.KnownToSerializer).keyedBy(g => g.serializedId);
/**
 * @param {!String} id
 * @param {!CustomGateSet} customGateSet
 * @returns {undefined|!Gate}
 */
Gates.findKnownGateById = (id, customGateSet) => {
    return gatesById.has(id) ? gatesById.get(id) : customGateSet.findGateWithSerializedId(id);
};

/** @type {!Array<!{hint: !string, gates: !Array<undefined|!Gate>}>} */
Gates.TopToolboxGroups = [
    {
        hint: "Probes",
        gates: [
            MeasurementGate,                  undefined,
            PostSelectionGates.PostSelectOff, PostSelectionGates.PostSelectOn,
            Controls.AntiControl,             Controls.Control
        ]
    },
    {
        hint: "Displays",
        gates: [
            undefined, undefined,
            DensityMatrixDisplayFamily.ofSize(1), BlochSphereDisplay,
            ProbabilityDisplayFamily.ofSize(1),   AmplitudeDisplayFamily.ofSize(2)
        ]
    },
    {
        hint: "Standard",
        gates: [
            HalfTurnGates.Z, SwapGateHalf,
            HalfTurnGates.Y, SpacerGate,
            HalfTurnGates.X, HalfTurnGates.H
        ]
    },
    {
        hint: "Order",
        gates: [
            CycleBitsGates.CycleBitsFamily.ofSize(3),        CycleBitsGates.ReverseCycleBitsFamily.ofSize(3),
            InterleaveBitsGates.InterleaveBitsGateFamily.ofSize(6),
            InterleaveBitsGates.DeinterleaveBitsGateFamily.ofSize(6),
        ]
    },
    {
        hint: "Names",
        gates: [
            NameGates.Alice, NameGates.Electron,
            NameGates.Bob, NameGates.Carbon,
            NameGates.Charlie, NameGates.Photon,
        ]
    },
];

/** @type {!Array<!{hint: !string, gates: !Array<undefined|!Gate>}>} */
Gates.BottomToolboxGroups = [
    {
        hint: "X/Y Probes",
        gates: [
            Controls.XAntiControl, Controls.XControl,
            Controls.YAntiControl, Controls.YControl,
            PostSelectionGates.PostSelectAntiX, PostSelectionGates.PostSelectX,
            PostSelectionGates.PostSelectAntiY, PostSelectionGates.PostSelectY,
        ]
    },
    {
        hint: "Half Turns",
        gates: [
            VariousRotations.X180, undefined,
            VariousRotations.Y180, undefined,
            VariousRotations.Z180, undefined,
        ]
    },
    {
        hint: "Quarter Turns",
        gates: [
            VariousRotations.X90, VariousRotations.mX90,
            VariousRotations.Y90, VariousRotations.mY90,
            VariousRotations.Z90, VariousRotations.mZ90,
        ]
    },
    {
        hint: "Alpha Turns",
        gates: [
            VariousRotations.alpha_5, VariousRotations.alpha_7,
            VariousRotations.alpha_10, VariousRotations.alpha_15,
            VariousRotations.alpha_20, VariousRotations.alpha_30,
        ]
    },
];

/** @type {!Map.<undefined|!string, !Array.<!Gate>>} */
const INITIAL_STATES_TO_GATES = new Map([
    [undefined, []],
    ['1', [VariousRotations.X180]],
    ['+', [VariousRotations.Y90]],
    ['-', [VariousRotations.mY90]],
    ['i', [VariousRotations.mX90]],
    ['-i', [VariousRotations.X90]]
]);

export {Gates, INITIAL_STATES_TO_GATES}
