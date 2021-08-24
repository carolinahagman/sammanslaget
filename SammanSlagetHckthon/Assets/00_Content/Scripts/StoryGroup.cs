using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class StoryGroup : MonoBehaviour {

	[SerializeField] private Button[] buttons;

	[SerializeField] private string storyText;

	[SerializeField] private Image storyImage;

	void Start() {

		//Get components here, find them
		//More fancy might be finding the text later on & loading from resources rather than hardcoding?

		//Loading the text,
		//setting things to inactive...

		//then, when on button push, activate things.

	}

	public void OnShow() {
		GetComponentInChildren<TextMeshProUGUI>().text = storyText;

	}
}
