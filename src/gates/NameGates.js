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

import {Config} from "src/Config.js"
import {GateBuilder} from "src/circuit/Gate.js"
import {GatePainting} from "src/draw/GatePainting.js"
import {Rect} from "src/math/Rect.js"

let NameGates = {};

NameGates.Alice = new GateBuilder().
    setSerializedIdAndSymbol("Alice").
    setTitle("Alice").
    setBlurb("A gate with no effect.").
    markAsNotInterestedInControls().
    promiseHasNoNetEffectOnStateVector().
    setDrawer(GatePainting.LABEL_DRAWER).
    gate;

NameGates.Bob = new GateBuilder().
    setSerializedIdAndSymbol("Bob").
    setTitle("Bob").
    setBlurb("A gate with no effect.").
    markAsNotInterestedInControls().
    promiseHasNoNetEffectOnStateVector().
    setDrawer(GatePainting.LABEL_DRAWER).
    gate;

NameGates.Charlie = new GateBuilder().
    setSerializedIdAndSymbol("Charlie").
    setTitle("Charlie").
    setBlurb("A gate with no effect.").
    markAsNotInterestedInControls().
    promiseHasNoNetEffectOnStateVector().
    setDrawer(GatePainting.LABEL_DRAWER).
    gate;

NameGates.Electron = new GateBuilder().
    setSerializedIdAndSymbol("Electron").
    setTitle("Electron").
    setBlurb("A gate with no effect.").
    markAsNotInterestedInControls().
    promiseHasNoNetEffectOnStateVector().
    setDrawer(GatePainting.LABEL_DRAWER).
    gate;

NameGates.Carbon = new GateBuilder().
    setSerializedIdAndSymbol("Carbon").
    setTitle("Carbon").
    setBlurb("A gate with no effect.").
    markAsNotInterestedInControls().
    promiseHasNoNetEffectOnStateVector().
    setDrawer(GatePainting.LABEL_DRAWER).
    gate;

NameGates.all = [
    NameGates.Alice,
    NameGates.Bob,
    NameGates.Charlie,
    NameGates.Electron,
    NameGates.Carbon,
];

export {NameGates}
